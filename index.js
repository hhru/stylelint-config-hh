const HEX_REGEX = new RegExp(/#[\da-f]{3,6}/);
const RGBA_REGEX = new RegExp(/rgba?\(/);
const HSLA_REGEX = new RegExp(/hsla?\(/);
const NO_TRANSPARENT_IN_GRADIENT_REGEX = new RegExp(/gradient.+?transparent/);

module.exports = {
    "plugins": [
        "stylelint-scss",
        "stylelint-order",
        "./plugins/hhru"
    ],
    "rules": {
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-invalid-hex": true,

        "font-family-name-quotes": "always-where-recommended",
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,

        "font-weight-notation": "named-where-possible",

        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never-single-line",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-url-scheme-disallowed-list": ["data", "/[A-Z]/"],
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",
        "function-whitespace-after": "always",

        "number-leading-zero": "always",
        "number-max-precision": 4,
        "number-no-trailing-zeros": true,

        "string-no-newline": true,
        "string-quotes": "single",

        "length-zero-no-unit": true,

        "time-min-milliseconds": 100,

        "unit-case": "lower",
        "unit-no-unknown": true,
        "unit-allowed-list": [
            "px",
            "%",
            "s",
            "ms",
            "deg",
            "fr",
            "vw",
            "vh"
        ],

        "value-keyword-case": [
            "lower",
            {
                "ignoreProperties": ["/^\@?font-family/"],
            }
        ],
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,

        "shorthand-property-no-redundant-values": true,

        "property-disallowed-list": ["font"],
        "property-case": "lower",
        "property-no-unknown": true,

        "keyframe-declaration-no-important": true,
        "keyframes-name-pattern": /^[a-z0-9-]+$/,

        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [
            "always",
            {
                "except": [
                    "after-comment",
                    "first-nested"
                ],
                "ignore": [
                    "after-declaration"
                ]
            }
        ],
        "declaration-no-important": true,
        "declaration-property-value-allowed-list": {
            //"/color/": ["inherit", "initial", "unset", "currentColor", "transparent", "/^@/"],
            "font-size": ["inherit", "initial", "unset", "0", /@bloko-typography-[a-zA-Z-]+-font-size/, /@magritte-core-font-size-[\d]/],
            "font-weight": ["inherit", "initial", "unset", "normal", /@bloko-typography-[a-zA-Z-]+-font-weight/],
            "font-style": ["inherit", "initial", "unset"],
            "z-index": [
                "inherit",
                "initial",
                "unset",
                "@floating",
                "@above-overlay-content",
                "@topmost",
                "@overlay",
                "@overlay-content",
                "@above-content-almost",
                "@above-content",
                "@cover-substrate",
                "@content-cover",
            ],
            "font-family": ["inherit", "initial", "unset", "/^@/", /@bloko-typography-[a-zA-Z-]+-font-family/]
        },
        "declaration-property-value-disallowed-list": {
            "/^border/": [HEX_REGEX, RGBA_REGEX, HSLA_REGEX, "/\\bnone\\b/"],
            "/color$/": [HEX_REGEX, RGBA_REGEX, HSLA_REGEX],
            "/background/": [HEX_REGEX, RGBA_REGEX, HSLA_REGEX, NO_TRANSPARENT_IN_GRADIENT_REGEX],
            "/box-shadow/": [HEX_REGEX, RGBA_REGEX, HSLA_REGEX],
            "/fill/": [HEX_REGEX, RGBA_REGEX, HSLA_REGEX],
            "/stroke/": [HEX_REGEX, RGBA_REGEX, HSLA_REGEX]
        },

        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-trailing-semicolon": "always",

        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-space-before": "always",

        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-quotes": "always",
        "selector-class-pattern": [
            /*
             .foo-block__bar-element_baz-modifier

             Скобки в коцне нужны для корректной обработки less-миксинов вида .my-mixin() {&:hover {}},
             что парсится в селектор вида .my-mixin():hover, т.к. полноценной поддержки less нет.
             */
            "^[a-z]+[a-z0-9]*(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:_[a-z0-9]+(?:-[a-z0-9]+)*)?(?:\\([^\\)]*\\))?$",
            {
                "resolveNestedSelectors": true
            }
        ],
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-max-compound-selectors": 3,
        "selector-max-id": 0,
        "selector-nested-pattern": [
            /^([^&]|(&[^-_]))+&?$/,
            {
                message: "Do not use parent selector for blocks/elements/modifiers"
            }
        ],
        "selector-no-qualifying-type": [
            true,
            {
                "ignore": [
                    "attribute"
                ]
            }
        ],
        "selector-max-universal": 0,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": [
            true,
            {
                // :global используется для CSS-модулей https://github.com/css-modules/css-modules#exceptions
                "ignorePseudoClasses": ["global"]
            }
        ],
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,
        "selector-max-empty-lines": 0,

        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",

        "rule-empty-line-before": [
            "always",
            {
                "except": [
                    "after-single-line-comment",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],

        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-name-no-unknown": true,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",

        "media-query-list-comma-newline-after": "always",
        "media-query-list-comma-space-before": "never",

        "at-rule-empty-line-before": [
            "always",
            {
                "except": [
                    "blockless-after-same-name-blockless",
                    "blockless-after-blockless",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always-single-line",
        "at-rule-no-unknown": true,
        "at-rule-semicolon-newline-after": "always",
        "at-rule-semicolon-space-before": "never",
        "at-rule-allowed-list": ["media", "keyframes", "import"],

        "comment-empty-line-before": [
            "always",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "stylelint-commands"
                ]
            }
        ],
        "comment-no-empty": true,
        "comment-whitespace-inside": "always",

        /*
        "indentation": [
            4,
            {
                "ignore": [
                    "param",
                    "value"
                ]
            }
        ],
        */
        "max-empty-lines": 2,
        "max-line-length": 120,
        "max-nesting-depth": [
            2,
            {
                "ignore": [
                    "blockless-at-rules"
                ]
            }
        ],
        /*
        "no-descending-specificity": true,
        */
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-first-line": true,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,
        "no-missing-end-of-source-newline": true,
        "no-unknown-animations": true,

        "scss/at-import-partial-extension-blacklist": ["less"],
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/double-slash-comment-empty-line-before": [
            "always",
            {
                "except": ["first-nested"],
                "ignore": ["between-comments", "stylelint-commands"],
            }
        ],
        "scss/selector-no-redundant-nesting-selector": true,

        "order/order": [
            "at-variables",
            "declarations",
            "rules",
            "at-rules"
        ],

        "linebreaks": "unix",
        "unicode-bom": "never",

        // @kebab-case-variables-only
        "hhru/less-variable-name-pattern": "^_?[a-z]+[a-z0-9]*(?:-[a-z0-9]+)*$",

        // no colors in variables
        "hhru/less-variable-value-disallowed-list": {
            '*': [HEX_REGEX, RGBA_REGEX, HSLA_REGEX],
        }
    },
};
