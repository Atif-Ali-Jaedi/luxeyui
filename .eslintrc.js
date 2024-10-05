module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    plugins: ["@typescript-eslint", "import"],
    env: {
        node: true,
        es2023: true,
        jest: true,
    },
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
    rules: {
        "import/order": ["error", { "newlines-between": "always" }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
};
