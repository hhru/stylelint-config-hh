# stylelint конфиг HH.ru

## История изменений

### 10.3.0

Разрешено использование `z-index` значений только из bloko переменных _layers.less

### 10.2.0

Разрешено использование единиц измерения `fr` для значений css-свойств

### 10.1.0

Разрешено использование css-переменных токенов magritte для свойств типографики (font-size)

### 10.0.0

* Изменен формат разрешенных less-переменных для дизайн-токенов для свойств типографики, только kebab-case

### 9.0.0

* Запрещено использование css-переменных токенов для свойств типографики (font-size, font-weight, font-family)
* Разрешено использование less-переменных (@bloko-typography-...) для свойств типографики

### 8.2.0

Разрешено использование css-переменных токенов для свойств типографики (font-size, font-weight, font-family)

### 8.1.0

Разрешено использование :global псевдоселектора, используется в CSS-модулях

### 8.0.0

В правило `declaration-property-value-disallowed-list` для свойства `background` добавлена проверка, не позволяющая использовать `transparent` внутри `gradient` 

### 7.0.0

Добавлено правило less-variable-value-disallowed-list, позволяющее запретить некоторые значения для less-переменных
Исправлено и переименовано правило at-variable-pattern, теперь оно называется less-variable-name-pattern
Оба правила вынесены в один плагин, неймспейс изменен с hh на hhru

### 6.0.0

Разрешил обратно CSS-правила `font-size`, `font-weight` и `font-family`, но только с разрешенными значениями:
* font-size: inherit, initial, unset, 0;
* font-weight: inherit, initial, unset, normal;
* font-style: inherit, initial, unset;

### 5.0.0

Запретил CSS-правила `font-size`, `font-weight` и `font-family`.

### 4.1.3

- Для правила `declaration-property-value-disallowed-list` исправлена проверка для свойства `border`

### 4.1.2

- В правило `declaration-property-value-disallowed-list` добавлена проверка, запрещающая использовать цвета HEX, RGBA и HSLA напрямую

### 4.1.1

- Добавлено начертание 800 в font-weight declaration-property-value-allowed-list

### 4.1.0

- Удалил stylelint-value-list-box-shadow-inset-first плагин.

### 4.0.1

- Переименовал deprecated правила.

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
