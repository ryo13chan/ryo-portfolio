module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-id-pattern': null,
  },
}
