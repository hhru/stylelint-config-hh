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
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-invalid-hex": true,

        "font-family-name-quotes": "always-where-recommended",
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,

        "font-weight-notation": "named-where-possible",

        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-name-case": "lower",
        "function-url-scheme-disallowed-list": ["data", "/[A-Z]/"],
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",

        "number-max-precision": 4,

        "string-no-newline": true,

        "length-zero-no-unit": true,

        "time-min-milliseconds": 100,

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

        "shorthand-property-no-redundant-values": true,

        "property-disallowed-list": ["font"],
        "property-no-unknown": true,

        "keyframe-declaration-no-important": true,
        "keyframes-name-pattern": /^[a-z0-9-]+$/,

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
            "font-family": ["inherit", "initial", "unset", "/^@/", /@bloko-typography-[a-zA-Z-]+-font-family/],
            "/.*/": "/^((?!@magritte-color-component)[\\s\\S])*$/"
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
        "selector-pseudo-class-no-unknown": [
            true,
            {
                // :global используется для CSS-модулей https://github.com/css-modules/css-modules#exceptions
                "ignorePseudoClasses": ["global"]
            }
        ],
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,

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

        "media-feature-name-no-unknown": true,

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
        "at-rule-no-unknown": true,
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
        "no-empty-source": true,
        "no-invalid-double-slash-comments": true,
        "no-unknown-animations": true,

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

        // @kebab-case-variables-only
        "hhru/less-variable-name-pattern": "^_?[a-z]+[a-z0-9]*(?:-[a-z0-9]+)*$",

        // no colors in variables
        "hhru/less-variable-value-disallowed-list": {
            '*': [HEX_REGEX, RGBA_REGEX, HSLA_REGEX],
        }
    },
};
