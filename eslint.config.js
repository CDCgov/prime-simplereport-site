import frontmatter from "eslint-plugin-frontmatter"
import globals from "globals";

export default [
    {
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