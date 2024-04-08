import frontmatter from "eslint-plugin-frontmatter"
import globals from "globals";

export default [
    {
        files:["assets/**/*.js"],
        ignores: [
            "**/uswds.js",
            "**/uswds.min.js",
            "**/main.js"
        ],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                ...globals.browser,
            }
        },
        plugins: {
            frontmatter: frontmatter
        },
    }
];