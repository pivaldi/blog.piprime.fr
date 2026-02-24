/* global hexo */
"use strict";

const cheerio = require("cheerio");

// Standard mathematical tree node to prevent state bleeding
class TreeNode {
  constructor(depth, el) {
    this.depth = depth;
    this.el = el;
    this.children = [];
    this.content = [];
    this.isLast = false;
  }
}

hexo.extend.filter.register("after_post_render", function (data) {
  if (!data.tree_view) return data;

  try {
    const $ = cheerio.load(data.content, { decodeEntities: false });
    const elements = $("body").children().toArray();
    if (elements.length === 0) return data;

    // PASS 1: Build a strict mathematical Tree in memory
    const root = new TreeNode(-1, null);
    const stack = [root];

    elements.forEach((el) => {
      if (!el.name) return;
      const match = el.name.match(/^h([1-6])$/i);

      if (match) {
        const depth = parseInt(match[1], 10) - 1; // H1=0, H2=1, etc.
        const node = new TreeNode(depth, el);

        // Pop the stack until we find our true structural parent
        while (stack.length > 1 && stack[stack.length - 1].depth >= depth) {
          stack.pop();
        }

        const parent = stack[stack.length - 1];
        parent.children.push(node);
        stack.push(node);
      } else {
        // Content strictly belongs to the most recent heading
        stack[stack.length - 1].content.push(el);
      }
    });

    const newBody = $("<div>");

    // PASS 2: Traverse the tree and generate perfect geometry
    function traverse(node, activeTrunks) {
      // 1. Render Heading
      if (node.depth >= 0) {
        const $heading = $(node.el);
        if (node.depth === 0) {
          $heading.addClass("tree-root");
        } else {
          $heading.addClass(`tree-node depth-${node.depth}`);
          if (node.isLast) $heading.addClass("is-last");
          if (activeTrunks.length > 0) $heading.addClass(activeTrunks.join(" "));
        }
        newBody.append($heading);
      }

      // 2. Calculate Ancestor Trunks
      const trunksForChildren = [...activeTrunks];
      // If an ancestor is not last, its line drops down through all descendants
      if (node.depth >= 1 && !node.isLast) {
        trunksForChildren.push(`trunk-${node.depth - 1}`);
      }

      // 3. Render Content Wrapper
      if (node.content.length > 0) {
        const cDepth = node.depth + 1;
        const contentTrunks = [...trunksForChildren];

        // KEY FIX: The parent's trunk ALWAYS passes through its own content!
        // This guarantees the vertical line directly to the left of the paragraphs.
        if (node.depth >= 0) {
          contentTrunks.push(`trunk-${node.depth}`);
        }

        // We use 'tree-content' so it draws vertical lines (│) but NO branches (├)
        const $wrapper = $("<div>").addClass(`tree-content depth-${cDepth}`);
        if (contentTrunks.length > 0) $wrapper.addClass(contentTrunks.join(" "));

        node.content.forEach((el) => $wrapper.append($(el)));
        newBody.append($wrapper);
      }

      // 4. Recurse Children
      for (let i = 0; i < node.children.length; i++) {
        // A child is last only if it's literally the last item in this parent's array
        node.children[i].isLast = i === node.children.length - 1;
        traverse(node.children[i], trunksForChildren);
      }
    }

    // Start traversal from root's children (usually H1s)
    for (let i = 0; i < root.children.length; i++) {
      root.children[i].isLast = i === root.children.length - 1;
      traverse(root.children[i], []);
    }

    // Handle any edge-case content that appeared before the first H1
    if (root.content.length > 0) {
      const $wrapper = $("<div>").addClass("tree-content depth-0");
      root.content.forEach((el) => $wrapper.append($(el)));
      newBody.prepend($wrapper);
    }

    // Final DOM Replacement
    $("body").empty().append(newBody.children());
    data.content = $("body").html();

    return data;
  } catch (error) {
    hexo.log.error("[ascii-tree-filter] Error processing post:", error);
    return data;
  }
});
