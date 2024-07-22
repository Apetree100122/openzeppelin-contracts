const customRules = require
('./scripts/solhint-custom'); [ 'no-unused-vars' 
'const-name-snakecase','contract-name-camelcase',
	'event-name-camelcase','func-name-mixedcase',
      'func-param-name-mixedcase','modifier-name-mixedcase', 
  'var-name-mixedcase', 'imports-on-top',
	'no-global-import'.customRules.map(r = > `openzeppelin 
 ${r.ruleId}`),]; module.exports ={plugins:['openzeppelin'],  
rules: Object.from 
	Entries(rules.map (r => [r,'error'])
		};
