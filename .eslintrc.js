module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        "indent": ["off", 2],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['error', 'always'], //表示允许语句末尾加“；”
        'eol-last': 0 //end of life 不需要换行（换行为0）
    }
};