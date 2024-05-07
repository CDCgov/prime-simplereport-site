import frontmatter from "eslint-plugin-frontmatter"
import globals from "globals";
import js from '@eslint/js';

export default [
    {
        files:["assets/**/*.js"],
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
        ...js.configs.recommended
    },
    { 
        ignores: [
            "**/uswds*.js",
            "**/main.js",
            "**/anchor*.js",
            "**/touchpoints.js",
        ],
    }
];