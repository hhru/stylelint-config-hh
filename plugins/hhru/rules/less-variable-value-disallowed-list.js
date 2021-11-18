const _ = require('lodash');
const stylelint = require('stylelint');

const ruleName = 'hhru/less-variable-value-disallowed-list';

const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: (name, value) => `Value "${value}" is not allowed for variable "@${name}"`,
});

const getApplicableRules = (variableName, rules) => {
    const { '*': allRule, ...restRules } = rules;
    const applicable = allRule ? [...allRule] : [];

    return Object.keys(restRules).reduce((applicable, ruleName) => {
        if (new RegExp(ruleName).test(variableName)) {
            applicable.push(...rules[ruleName])
        }

        return applicable;
    }, applicable);
}

module.exports = stylelint.createPlugin(ruleName, (rules) => {
    return function (root, result) {
        const validOptions = stylelint.utils.validateOptions(result, ruleName, {
            actual: rules,
            possible: [_.isObject],
        });
        if (!validOptions) {
            return;
        }

        const regexRules = Object.keys(rules).reduce((acc, ruleName) => {
            acc[ruleName] = rules[ruleName].map((rule) => (_.isString(rule) ? new RegExp(rule) : rule));
            return acc;
        }, {});

        root.walkAtRules((node) => {
            if (!node.variable) {
                return;
            }

            const applicableRules = getApplicableRules(node.name, regexRules);

            if (applicableRules.some((regexp) => regexp.test(node.value))) {
                stylelint.utils.report({
                    message: messages.expected(node.name, node.value),
                    node: node,
                    result,
                    ruleName,
                });
            }
        });
    };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
