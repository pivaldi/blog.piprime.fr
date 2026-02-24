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

    // PASS 1: Group elements into heading + content blocks
    const groups = [];
    let currentGroup = null;

    elements.forEach((el) => {
      const tagName = el.tagName.toUpperCase();
      const match = tagName.match(/^H([1-6])$/);

      if (match) {
        // This is a heading - start a new group
        const depth = parseInt(match[1]) - 1; // H1=0, H2=1, etc.

        currentGroup = {
          heading: el,
          headingDepth: depth,
          contentDepth: depth + 1,
          content: []
        };
        groups.push(currentGroup);
      } else {
        // This is content - add to current group
        if (currentGroup) {
          currentGroup.content.push(el);
        } else {
          // Content before first heading - create a group without heading
          currentGroup = {
            heading: null,
            headingDepth: -1,
            contentDepth: 0,
            content: [el]
          };
          groups.push(currentGroup);
        }
      }
    });

    // PASS 2: Calculate isLast flags for each group
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      let isLast = true;

      // Check if there's a sibling or shallower group after this one
      for (let j = i + 1; j < groups.length; j++) {
        if (groups[j].headingDepth <= group.headingDepth) {
          if (groups[j].headingDepth === group.headingDepth) {
            isLast = false; // Found a sibling
          }
          break;
        }
      }

      group.isLast = isLast;
    }

    // PASS 3: Calculate trunk classes for each group
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];

      // Calculate trunks for heading
      const headingTrunks = [];
      for (let ancestorDepth = 1; ancestorDepth <= group.headingDepth; ancestorDepth++) {
        // Find the ancestor at this depth
        // Stop if we encounter a shallower element (different section)
        let ancestorIndex = -1;
        for (let j = i - 1; j >= 0; j--) {
          if (groups[j].headingDepth === ancestorDepth) {
            ancestorIndex = j;
            break;
          }
          // If we encounter an element shallower than what we're looking for, stop
          if (groups[j].headingDepth < ancestorDepth) {
            break;
          }
        }

        if (ancestorIndex === -1) continue;

        // Add trunk if ancestor is not last (has siblings) OR has descendants (current element is one)
        // This means: add trunk unless ancestor is last AND we're the last descendant
        if (!groups[ancestorIndex].isLast) {
          // Ancestor has siblings, always add trunk
          headingTrunks.push(`trunk-${ancestorDepth - 1}`);
        } else {
          // Ancestor is last (no siblings), but check if there are more descendants
          let hasMoreDescendants = false;
          for (let k = i + 1; k < groups.length; k++) {
            if (groups[k].headingDepth <= ancestorDepth) {
              // Exited ancestor's section
              break;
            }
            // Found another descendant
            hasMoreDescendants = true;
            break;
          }

          if (hasMoreDescendants || !group.isLast) {
            // Either more descendants coming, or we're not the last at our depth
            headingTrunks.push(`trunk-${ancestorDepth - 1}`);
          }
        }
      }

      // Calculate trunks for content wrapper (one level deeper)
      const contentTrunks = [...headingTrunks];
      // Add trunk line if the heading itself is not last
      if (group.heading && !group.isLast) {
        contentTrunks.push(`trunk-${group.headingDepth}`);
      }

      group.headingTrunks = headingTrunks;
      group.contentTrunks = contentTrunks;
    }

    // PASS 4: Apply classes and wrap content
    const newBody = $("<div>");

    groups.forEach((group) => {
      // Add heading with tree classes
      if (group.heading) {
        const $heading = $(group.heading);

        if (group.headingDepth === 0) {
          $heading.addClass("tree-root");
        } else {
          $heading.addClass("tree-node");
          $heading.addClass(`depth-${group.headingDepth}`);

          if (group.isLast) {
            $heading.addClass("is-last");
          }

          group.headingTrunks.forEach((trunk) => $heading.addClass(trunk));
        }

        newBody.append($heading);
      }

      // Wrap content in a div with tree classes if there's content
      if (group.content.length > 0) {
        const wrapper = $("<div>");
        wrapper.addClass("tree-node");
        wrapper.addClass(`depth-${group.contentDepth}`);

        if (group.isLast) {
          wrapper.addClass("is-last");
        }

        group.contentTrunks.forEach((trunk) => wrapper.addClass(trunk));

        // Move content into wrapper
        group.content.forEach((el) => {
          wrapper.append($(el));
        });

        newBody.append(wrapper);
      }
    });

    // Replace body content
    $("body").empty().append(newBody.children());

    // Return modified HTML
    data.content = $("body").html();
    return data;
  } catch (error) {
    hexo.log.error("[ascii-tree-filter] Error processing post:", error);
    return data; // Return unchanged on error
  }
});
