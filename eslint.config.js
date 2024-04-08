import frontmatter from "eslint-plugin-frontmatter"

export default [
    {
        browser: true,
        commonjs: true,
        es2020: true,
        extends: {
            "eslint" : "recommended"
        },
        files: ["assets/js/"],
        plugins: {
            frontmatter: frontmatter
        },
        ignores: [
            "uswds.min.js",
            "uswds-init*.js",
            "gtm.js",
            "main.js",
            "uswds.js",
            "jquery3.5.1.min.js",
            "url-search-param-polyfil.js",
            "anchor.min.js",
            "touchpoints.js"
        ]
    }
];