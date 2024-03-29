module.exports = {
	'parserOptions': {
		'ecmaVersion': 8,
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'sourceType': 'module'
	},

	'env': {
		'es6': true,
		'node': true
	},

	'plugins': [
		'import',
		'node',
		'promise',
		'html'
	],

	'globals': {
		'document': false,
		'navigator': false,
		'window': false
	},

	'rules': {
		'accessor-pairs': 'error',
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'array-element-newline': [
			'error',
			'consistent'
		],
		'arrow-parens': [
			'error',
			'always'
		],
		'arrow-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'block-spacing': [
			'error',
			'always'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				'allowSingleLine': false
			}
		],
		'camelcase': [
			'error',
			{
				'properties': 'never'
			}
		],
		'comma-dangle': [
			'error',
			{
				'arrays': 'never',
				'objects': 'never',
				'imports': 'never',
				'exports': 'never',
				'functions': 'never'
			}
		],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'constructor-super': 'error',
		'curly': [
			'error',
			'multi-line'
		],
		'dot-location': [
			'error',
			'property'
		],
		'dot-notation': 'error',
		'eol-last': [
			'error',
			'always'
		],
		'eqeqeq': [
			'error',
			'always',
			{
				'null': 'ignore'
			}
		],
		'func-call-spacing': [
			'error',
			'never'
		],
		'function-call-argument-newline': [
			'error',
			'consistent'
		],
		'function-paren-newline': [
			'error',
			'consistent'
		],
		'generator-star-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'handle-callback-err': [
			'error',
			'^(err|error)$'
		],
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'key-spacing': [
			'error',
			{
				'beforeColon': false,
				'afterColon': true
			}
		],
		'keyword-spacing': [
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'lines-between-class-members': [
			'error',
			'always'
		],
		'new-cap': [
			'error',
			{
				'newIsCap': true,
				'capIsNew': false
			}
		],
		'new-parens': 'error',
		'newline-per-chained-call': 'error',
		'no-array-constructor': 'error',
		'no-caller': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-constant-condition': [
			'error',
			{
				'checkLoops': false
			}
		],
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': [
			'error',
			'functions'
		],
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implied-eval': 'error',
		'no-inner-declarations': [
			'error',
			'functions'
		],
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': [
			'error',
			{
				'allowLoop': false,
				'allowSwitch': false
			}
		],
		'no-lone-blocks': 'error',
		'no-mixed-operators': [
			'error',
			{
				'groups': [
					[
						'==',
						'!=',
						'===',
						'!==',
						'>',
						'>=',
						'<',
						'<='
					],
					[
						'&&',
						'||'
					],
					[
						'in',
						'instanceof'
					]
				],
				'allowSamePrecedence': true
			}
		],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxEOF': 0
			}
		],
		'no-negated-in-lhs': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-path-concat': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-return-assign': [
			'error',
			'except-parens'
		],
		'no-return-await': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-tabs': 0,
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': [
			'error',
			{
				'defaultAssignment': false
			}
		],
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': [
			'error',
			{
				'allowShortCircuit': true,
				'allowTernary': true,
				'allowTaggedTemplates': true
			}
		],
		'no-unused-vars': [
			'warn',
			{
				'vars': 'all',
				'args': 'none',
				'ignoreRestSiblings': true
			}
		],
		'no-use-before-define': [
			'error',
			{
				'functions': false,
				'classes': false,
				'variables': false
			}
		],
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'object-property-newline': [
			'error',
			{
				'allowAllPropertiesOnSameLine': true
			}
		],
		'one-var': [
			'error',
			{
				'initialized': 'never'
			}
		],
		'operator-linebreak': [
			'error',
			'after',
			{
				'overrides': {
					'?': 'before',
					':': 'before'
				}
			}
		],
		'padded-blocks': [
			'error',
			{
				'blocks': 'never',
				'switches': 'never',
				'classes': 'never'
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				'blankLine': 'always',
				'prev': 'const',
				'next': '*'
			},
			{
				'blankLine': 'any',
				'prev': 'const',
				'next': 'const'
			}
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': [ 'error', {
			'destructuring': 'any',
			'ignoreReadBeforeAssign': false
		} ],
		'prefer-promise-reject-errors': 'error',
		'quotes': [
			'error',
			'single',
			{
				'avoidEscape': true,
				'allowTemplateLiterals': true
			}
		],
		'rest-spread-spacing': [
			'error',
			'never'
		],
		'semi': [
			'error',
			'always'
		],
		'semi-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			'always'
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				'words': true,
				'nonwords': false
			}
		],
		'spaced-comment': [
			'error',
			'always',
			{
				'line': {
					'markers': [
						'*package',
						'!',
						'/',
						','
					]
				},
				'block': {
					'balanced': true,
					'markers': [
						'*package',
						'!',
						',',
						':',
						'::',
						'flow-include'
					],
					'exceptions': [
						'*'
					]
				}
			}
		],
		'symbol-description': 'error',
		'template-curly-spacing': [
			'error',
			'never'
		],
		'template-tag-spacing': [
			'error',
			'never'
		],
		'unicode-bom': [
			'error',
			'never'
		],
		'use-isnan': 'error',
		'valid-typeof': [
			'error',
			{
				'requireStringLiterals': true
			}
		],
		'wrap-iife': [
			'error',
			'any',
			{
				'functionPrototypeMethods': true
			}
		],
		'yield-star-spacing': [
			'error',
			'both'
		],
		'yoda': [
			'error',
			'never'
		],

		'import/export': 'error',
		'import/first': 'error',
		'import/no-duplicates': 'error',
		'import/no-unresolved': 'error',
		'import/no-webpack-loader-syntax': 'error',

		'node/exports-style': [
			'error',
			'module.exports'
		],
		'node/no-deprecated-api': 'error',
		'node/no-exports-assign': 'error',
		'node/no-extraneous-import': 'error',
		'node/no-extraneous-require': 'error',
		'node/process-exit-as-throw': 'error',

		'promise/always-return': 'error',
		'promise/catch-or-return': 'error',
		'promise/no-nesting': 'error',
		'promise/no-new-statics': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/no-return-wrap': 'error',
		'promise/param-names': 'error',
		'promise/prefer-await-to-callbacks': 'error',
		'promise/prefer-await-to-then': 'error',
		'promise/valid-params': 'error'
	}
};
