module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-rational-order',
  ],
  overrides: [
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    // support BEM methodology
    'max-nesting-depth': [2, {
      ignore: ['pseudo-classes'],
      ignoreAtRules: ['media', 'include', 'each','if'],
    }],
    // I prefere 4 space of indentation for the lisibility
    'indentation':4,
    // disable alphabetical ordering
    'order/properties-alphabetical-order': null,
    // https://github.com/constverum/stylelint-config-rational-order#optional-options--rules
    'plugin/rational-order': [true, {
      // add an empty line between groups
      'empty-line-between-groups': true,
    }],
  },
};