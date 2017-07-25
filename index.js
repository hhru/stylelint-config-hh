module.exports = {
    "plugins": [
        "stylelint-scss",
        "stylelint-order",
        "stylelint-value-list-box-shadow-inset-first",
        "./plugins/stylelint-at-variable-pattern"
    ],
    "rules": {
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-invalid-hex": true,

        "font-family-name-quotes": "always-where-recommended",
        "font-family-no-duplicate-names": true,

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
        "function-parentheses-space-inside": "never",
        "function-url-data-uris": "never",
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",
        "function-whitespace-after": "always",

        "number-leading-zero": "always",
        "number-max-precision": 4,
        "number-no-trailing-zeros": true,

        "string-no-newline": true,
        "string-quotes": "double",

        "length-zero-no-unit": true,

        "time-min-milliseconds": 100,

        "unit-case": "lower",
        "unit-no-unknown": true,
        "unit-whitelist": [
            "px",
            "%",
            "s",
            "ms",
            "deg",
            "vw"
        ],

        "value-keyword-case": [
            "lower",
            {
                "ignoreKeywords": ["Arial"],
            }
        ],
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,

        "shorthand-property-no-redundant-values": true,

        "property-blacklist": ["font"],
        "property-case": "lower",
        "property-no-unknown": true,

        "keyframe-declaration-no-important": true,

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
        /*
        "declaration-property-unit-whitelist": {
            "line-height": []
        },
        */
        "declaration-property-value-whitelist": {
            //"/color/": ["inherit", "initial", "unset", "currentColor", "transparent", "/^@/"],
            "font-weight": ["inherit", "initial", "unset", "bold", "normal", "/^@/"],
            "font-style": ["inherit", "initial", "unset", "italic", "normal", "/^@/"],
            //"z-index": ["inherit", "initial", "unset", "/^@/"]
            //"font-size": ["inherit", "initial", "unset", "/^@/"]
            //"font-family": ["inherit", "initial", "unset", "/^@/"]
        },
        "declaration-property-value-blacklist": {
            "/^border/": ["/\\bnone\\b/"]
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
        "selector-no-id": true,
        "selector-no-qualifying-type": [
            true,
            {
                "ignore": [
                    "attribute"
                ]
            }
        ],
        "selector-no-universal": true,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
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
        "at-rule-whitelist": ["media", "keyframes", "import"],

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
        "no-duplicate-selectors": true,
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
            ["at-variables", "declarations", "rules", "at-rules"],
        ],

        "plugin/value-list-box-shadow-inset-first": true,

        // @kebab-case-variables-only
        "hh/at-variable-pattern": "^[a-z]+[a-z0-9]*(?:-[a-z0-9]+)*$",
    },
};
