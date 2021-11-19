const _ = require('lodash');
const stylelint = require('stylelint');

const ruleName = 'hhru/less-variable-name-pattern';

const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: (name, pattern) => `Expected variable "@${name}" name to match pattern "${pattern}"`,
});

module.exports = stylelint.createPlugin(ruleName, (pattern) => {
    return function(root, result) {
        const validOptions = stylelint.utils.validateOptions(result, ruleName, {
            actual: pattern,
            possible: [
                _.isRegExp,
                _.isString,
            ],
        });
        if (!validOptions) {
            return;
        }

        const regexpPattern = _.isString(pattern) ? new RegExp(pattern) : pattern;

        root.walkAtRules((node) => {
            if (!node.variable) {
                return;
            }

            if (regexpPattern.test(node.name)) {
                return;
            }

            stylelint.utils.report({
                message: messages.expected(node.name, regexpPattern),
                node: node,
                result,
                ruleName,
            });
        });

    };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
