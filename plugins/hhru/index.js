const lessVariableNamePattern = require('./rules/less-variable-name-pattern');
const lessVariableValueDisallowedList = require('./rules/less-variable-value-disallowed-list');


module.exports = [ lessVariableNamePattern, lessVariableValueDisallowedList];
