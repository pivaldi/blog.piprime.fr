/* global hexo */
"use strict";

const cheerio = require("cheerio");

hexo.extend.filter.register("after_post_render", function (data) {
  try {
    // Only apply to posts with tree_view: true in front matter
    if (!data.tree_view) {
      return data;
    }

    // Load HTML and get direct children
    const $ = cheerio.load(data.content, { decodeEntities: false });
    const elements = $("body").children().toArray();

    if (elements.length === 0) {
      return data;
    }

    // PASS 1: Build nodes array with depths
    const nodes = [];
    let currentHeadingDepth = 0;

    elements.forEach((el) => {
      const tagName = el.tagName.toUpperCase();
      const match = tagName.match(/^H([1-6])$/);

      let depth;
      if (match) {
        // Heading: H1=0, H2=1, H3=2, etc.
        depth = parseInt(match[1]) - 1;
        currentHeadingDepth = depth;
      } else {
        // Content: parent heading depth + 1
        depth = currentHeadingDepth + 1;
      }

      nodes.push({ el, depth, tagName });
    });

    // PASS 2: Calculate isLast flags
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      let isLast = true;

      // Look ahead for siblings or shallower headings
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[j].depth < node.depth) {
          // Shallower heading = section ended, we're last
          isLast = true;
          break;
        } else if (nodes[j].depth === node.depth) {
          // Sibling found = not last
          isLast = false;
          break;
        }
        // Deeper nodes don't affect our status, keep looking
      }

      node.isLast = isLast;
    }

    // PASS 3: Calculate trunk classes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const trunks = [];

      // Check each ancestor level from 1 to (current depth - 1)
      for (let ancestorDepth = 1; ancestorDepth < node.depth; ancestorDepth++) {
        // Look backwards to find most recent node at this depth
        for (let j = i - 1; j >= 0; j--) {
          if (nodes[j].depth === ancestorDepth) {
            // If ancestor is not last, we need a trunk line
            if (!nodes[j].isLast) {
              trunks.push(`trunk-${ancestorDepth - 1}`);
            }
            break;
          }
        }
      }

      node.trunks = trunks;
    }

    // PASS 4: Apply classes to DOM
    for (const node of nodes) {
      const $el = $(node.el);

      if (node.depth === 0) {
        // H1 gets tree-root only
        $el.addClass("tree-root");
      } else {
        // Everything else gets tree-node + depth + optional modifiers
        $el.addClass("tree-node");
        $el.addClass(`depth-${node.depth}`);

        if (node.isLast) {
          $el.addClass("is-last");
        }

        node.trunks.forEach((trunk) => $el.addClass(trunk));
      }
    }

    // Return modified HTML
    data.content = $("body").html();
    return data;
  } catch (error) {
    hexo.log.error("[ascii-tree-filter] Error processing post:", error);
    return data; // Return unchanged on error
  }
});
