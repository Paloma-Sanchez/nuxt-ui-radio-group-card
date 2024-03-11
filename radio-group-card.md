---
description: Create a button with icon or link capabilities.
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/dev/src/runtime/components/elements/Button.vue
---

## Usage

Use the default slot to set the text of the Button.

::component-card
---
code: Button
---

Button
::

You can also use the `label` prop.

::component-radio-goup-card
---
props:
  label: Button
---
::

### Style

Use the `color` and `variant` props to change the visual style of the Button.

::component-radio-goup-card
---
props:
  color: 'primary'
  variant: 'solid'
code: Button
---

Button
::

Besides all the colors from the `ui.colors` object, you can also use the `white`, `gray` and `black` colors with their pre-defined variants.

### Size

Use the `size` prop to change the size of the Button.

::component-radio-goup-card
---
props:
  size: 'sm'
code: Button
---

Button
::

### Rounded

To customize the border radius of the Button, you can use the `ui` prop.

::component-card
---
props:
  ui:
    rounded: 'rounded-full'
excludedProps:
  - ui
code: Button
---

Button
::

::callout{icon="i-heroicons-light-bulb"}
You can customize the whole [preset](#preset) by using the `ui` prop.
::

### Icon

Use any icon from [Iconify](https://icones.js.org) by setting the `icon` prop by using this pattern: `i-{collection_name}-{icon_name}`.

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

::component-card
---
props:
  icon: 'i-heroicons-pencil-square'
  size: 'sm'
  color: 'primary'
  variant: 'solid'
  label: Button
  trailing: false
excludedProps:
  - icon
  - label
---
::

The `label` as prop or slot is optional so you can use the Button as an icon-only button.

::component-card
---
props:
  icon: 'i-heroicons-pencil-square'
  size: 'sm'
  color: 'primary'
  square: true
  variant: 'solid'
excludedProps:
  - icon
  - square
---
::

### Disabled

Use the `disabled` prop to disable the Button.

::component-card
---
props:
  disabled: true
code: Button
---

Button
::

### Truncate

Use the `truncate` prop to truncate the label of the Button.

::component-card
---
props:
  truncate: true
  class: 'w-20'
  label: 'Button with a long text'
excludedProps:
  - class
---
::

## Slots

### `leading`

Use the `#leading` slot to set the content of the leading icon.

::component-card
---
slots:
  leading: <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="3xs" />
baseProps:
  color: 'gray'
props:
  label: Button
  color: 'gray'
excludedProps:
  - color
---

#leading
  :u-avatar{src="https://avatars.githubusercontent.com/u/739984?v=4" size="3xs"}
::

### `trailing`

Use the `#trailing` slot to set the content of the trailing icon.

::component-card
---
slots:
  trailing: <UIcon name="i-heroicons-arrow-right-20-solid" />
props:
  label: Button
  color: 'gray'
excludedProps:
  - color
---

#trailing
  :u-icon{name="i-heroicons-arrow-right-20-solid"}
::

## Props

::tabs
  :component-props{label="Button"}
  :component-props{label="ButtonGroup" slug="UButtonGroup"}
::

## Config

::tabs
  :component-preset{label="Button"}
  :component-preset{label="ButtonGroup" slug="ButtonGroup"}
::
