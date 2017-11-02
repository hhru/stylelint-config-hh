# stylelint конфиг HH.ru

## История изменений

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
