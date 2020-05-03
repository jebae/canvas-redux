module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  overrides: [
    {
      files: [ "*.js", "*.jsx" ],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: [ "*.ts", "*.tsx" ],
      rules: {
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ],
  settings: {
    react: {
      version: require("./package.json").dependencies.react
    }
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "quotes": [ "error", "double", { avoidEscape: true } ],
    "semi": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always", { singleValue: false } ],
    "object-curly-spacing": [ "error", "always" ],
    "comma-dangle": [ "error", "only-multiline" ],
  }
}