module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-html/vue', 'stylelint-config-recess-order'],
	plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss'],
	// 不同格式的文件指定自定义语法
	overrides: [
		{
			files: ['**/*.(scss|css|vue|html)'],
			customSyntax: 'postcss-scss',
			extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
		},
		{
			files: ['**/*.(html|vue)'],
			customSyntax: 'postcss-html',
		},
	],
	ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml', 'dist/**/*'],
	rules: {
		'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep'],
			},
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep'],
			},
		],
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'scss/dollar-variable-pattern': null,
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep', 'global'],
			},
		],
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
			},
		],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'function', 'if', 'each', 'include', 'mixin', 'use'],
			},
		],
		'rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'first-nested'],
			},
		],
		'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
		'order/order': [
			[
				'dollar-variables',
				'custom-properties',
				'at-rules',
				'declarations',
				{
					type: 'at-rule',
					name: 'supports',
				},
				{
					type: 'at-rule',
					name: 'media',
				},
				'rules',
			],
			{ severity: 'warning' },
		],
	},
};
