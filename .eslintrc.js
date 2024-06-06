module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        '@nuxt/eslint-config',
        // 'eslint:recommended',
        'plugin:nuxt/recommended', // 针对nuxt3的校验规则
        '@vue/typescript/recommended',
        'prettier',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',

        // 'plugin:vue/vue3-recommended',
        // 'plugin:nuxt/recommended', // 针对nuxt3的校验规则
        // '@vue/eslint-config-typescript',
        // '@vue/eslint-config-prettier',
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: latest,
    },
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                    Function: false,
                },
            },
        ],
        'vue/multi-word-component-names': 0,
    },
    overrides: [{
        files: ['**/__tests__/*.{t}s?(x)', '**/tests/unit/**/*.spec.{t}s?(x)'],
        env: {
            mocha: true,
        },
    },],
    globals: {
        defineProps: 'readonly',
        uni: true,
        wx: true
    },
};