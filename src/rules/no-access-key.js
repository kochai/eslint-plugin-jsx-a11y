/**
 * @fileoverview Enforce no accesskey attribute on element.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

import { getProp, getPropValue } from 'jsx-ast-utils';

const errorMessage = 'No access key attribute allowed. Inconsistencies ' +
  'between keyboard shortcuts and keyboard comments used by screenreader ' +
  'and keyboard only users create a11y complications.';

module.exports = context => ({
  JSXOpeningElement: node => {
    const accessKey = getProp(node.attributes, 'accesskey');
    const accessKeyValue = getPropValue(accessKey);

    if (accessKey && accessKeyValue) {
      context.report({
        node,
        message: errorMessage,
      });
    }
  },
});

module.exports.schema = [
  { type: 'object' },
];
