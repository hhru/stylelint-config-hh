# stylelint конфиг HH.ru

## История изменений

### 4.0.0

- Поднял версию stylelint до 13.13.1
- Поднял версию stylelint-order до 4.1.0
- Поднял версию stylelint-scss до 3.19.0
- Поднял версию lodash до 4.17.21

### 3.1.0

- Поменял "never" на "never-single-line" для function-parentheses-space-inside из-за конфликта с
  максимальной длиной строки

### 3.0.0

- Поднял версии зависимостей
- Включил правила
    - `font-family-no-missing-generic-family-keyword`
    - `keyframes-name-pattern`
    - `no-duplicate-at-import-rules`
    - `no-empty-first-line`
    - `linebreaks`
    - `unicode-bom`
- Запретил parent selector для блоков/элементов/модификаторов
- Поменял значение правила `string-quotes` с `double` на `single`

### 2.0.6

- В правило `declaration-property-value-whitelist` добавлена проверка свойства `font-family`. Разрешенные значения: `inherit`, `initial`, `unset` и less-переменные.

### 2.0.5

- Добавили единицу измерения vh в `unit-whitelist`

### 2.0.4

- В правиле `stylelint-order` убрали специфичность порядка для less-mixins. С версией stylelint@8.2.0 нет необходимости в дополнительном условии.

### 2.0.3

- В правиле `stylelint-order` изменён порядок перечисления свойств. Less-mixins добавлены перед declarations.
- Подняли версию плагина `stylelint-order`

### 2.0.2

- Исправлен баг в значении `ignoreProperties` правила `value-keyword-case`

### 2.0.1

- В правило `value-keyword-case` добавлено исключение для свойства `font-family`

### 2.0.0
    
- Подняли версию stylelint до 8.2.0
- Заменены deprecated-правила `function-url-data-uris`, `selector-no-id`, `selector-no-universal` на:
    - `function-url-scheme-blacklist: ["data", "/[A-Z]/"]`
    - `selector-max-id: 0`
    - `selector-max-universal: 0`
    
### 1.2.0

- Добавили единицу измерения vw в whitelist

### 1.0.0

- Первичный релиз
