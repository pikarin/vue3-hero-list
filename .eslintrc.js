module.exports = {
    extends: [
        "plugin:vue/vue3-recommended",
        "prettier",
        "prettier/vue",
    ],
    rules: {
        "vue/no-unregistered-components": "error",
        "vue/html-self-closing": "off",
    }
}