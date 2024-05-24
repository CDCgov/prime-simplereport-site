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
        ...js.configs.recommended
    },
    { 
        ignores: [
            "**/uswds*.js",
            "**/main.js",
            "**/anchor*.js",
            "**/touchpoints.js"
        ],
    }
];