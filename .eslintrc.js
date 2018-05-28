// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  extends: "airbnb-base",
  // required to lint *.vue files
  plugins: ["html"],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js",
      },
    },
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never",
      },
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"],
      },
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // 是否禁用console
    "no-console": "off",
    // 是否允许对 function 的参数重新赋值
    "no-param-reassign": "off",
    // 是否强制使用一致的换行风格
    // 'unix' 代表 LF  'windows' 代表CRLF
    "linebreak-style": ["error", "windows"],
    // 是否强制为箭头函数的参数加上括号
    "arrow-parens": ["error", "always"],
    // 对象字面量中的属性名是否强制双引号
    // "quote-props": ["error", "always"],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: ["error", "double"],
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true,
  },
};
