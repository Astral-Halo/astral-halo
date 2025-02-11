/**
 * @import {} from 'mdast-util-directive'
 * @import {Root} from 'mdast'
 */
import { h } from 'hastscript';
import { visit } from 'unist-util-visit';

export function parseDirectiveNodes() {
  /**
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        const data = node.data || (node.data = {});
        node.attributes = node.attributes || {};
        if (
          node.children.length > 0 &&
          node.children[0].data &&
          node.children[0].data.directiveLabel
        ) {
          node.attributes['has-directive-label'] = true;
        }
        const hast = h(node.name, node.attributes);
        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    });
  };
}
