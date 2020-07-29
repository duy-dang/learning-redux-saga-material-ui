module.exports = {
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    parser: "babel-eslint",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    plugins: ["prettier"],
    rules: {
        "react/prop-types" : 0,
        "import/order": 0,
        "react/jsx-max-props-per-line":1,
        'linebreak-style': 0 ,
        'import/no-extraneous-dependencies':0,
        'class-methods-use-this':0,
        'react/jsx-filename-extension':0,
        'react/jsx-one-expression-per-line':0,
        'react/forbid-prop-types':0,
        'react/require-default-props':0,
        'react/prefer-stateless-function':0,
        'react/no-array-index-key':0,
        'import/prefer-default-export':0,
        'no-var':0,
        'no-unused-vars':1,
        'no-param-reassign':0,
        "prettier/prettier": ["error"]
    },
    env:{
        "es6": true,
        "browser":true,
        "node": true
    }
}