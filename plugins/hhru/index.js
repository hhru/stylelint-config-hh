const lessVariableNamePattern = require('./rules/less-variable-name-pattern');
const lessVariableValueDisallowedList = require('./rules/less-variable-value-disallowed-list');
const lessImportReplacement = require('./rules/less-import-replacement');

module.exports = [lessVariableNamePattern, lessVariableValueDisallowedList, lessImportReplacement];
