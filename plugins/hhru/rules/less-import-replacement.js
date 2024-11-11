const stylelint = require("stylelint");
const _ = require('lodash');

const ruleName = 'hhru/less-import-replacement';
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: (actual, expected) => `Expected import ${actual} to be replaced with import ${expected}`,
});

const ruleFunction = (options) => {
    return (root, result) => {
        const validOptions = stylelint.utils.validateOptions(result, ruleName, {
            actual: options,
            possible: [
                _.isArray,
            ],
        });
        if (!validOptions) {
            return;
        }

        const replacements = options.map(([matcher, replacement]) => _.isString(matcher) ? [new RegExp(matcher), replacement] : [matcher, replacement])

        root.walkAtRules('import', (atRule) => {
            const importStatement = atRule.params

            for (const [pattern, replacement] of replacements) {
                if (!pattern.test(importStatement)) {
                    continue
                }

                const suggestedReplacement = importStatement.replace(pattern, replacement);
                stylelint.utils.report({
                    message: messages.expected(importStatement, suggestedReplacement),
                    node: atRule,
                    result,
                    ruleName,
                    fix: () => {
                        const newNode = atRule.clone();
                        newNode.params =
                            (newNode.raws.afterName ?? ' ') +
                            suggestedReplacement;
                        newNode.raws.afterName = ' ';
                        atRule.replaceWith(newNode);
                    }
                });
                break;
            }
        });
    };
}

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = {
    fixable: true
}
ruleFunction.primaryOptionArray = true;

module.exports = stylelint.createPlugin(ruleName, ruleFunction);


