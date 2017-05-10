const _ = require('lodash');
const stylelint = require('stylelint');

const ruleName = 'hh/at-variable-pattern';

const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: 'Expected at variable name to match specified pattern',
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

        root.walkDecls((decl) => {
            const prop = decl.prop;

            if (prop[0] !== '@' || prop[1] === '{') {
                return;
            }

            if (regexpPattern.test(prop.slice(1))) {
                return;
            }

            stylelint.utils.report({
                message: messages.expected,
                node: decl,
                result,
                ruleName,
            });
        });

    };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
