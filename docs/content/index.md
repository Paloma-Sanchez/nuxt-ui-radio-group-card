---
title: radio-group-card
description: Create a button with icon or link capabilities.
links:
  - label: GitHub
    icon: i-simple-icons-github

---

## Usage

Pass an array of arrays to the `items` prop of the Dropdown component. Each array represents a group of items. Each item can have the following properties:

- `label` - The label of the item.
- `value` - The class of the item label.
- `description` - The class of the item icon.
- `icon` - The icon of the item.

Use a v-model to make the RadioGroup reactive.




## Legend

Use the legend prop to add a legend on the top of the RadioGroup.

::component-card-content
---
props:
  - name:'legend'
  - type: ''
  - legend:'Legend'
  - disabled: false
  - required:false
  - help:''
  - slots:''
  - options:
componentProps:
  - options:
      - value: 'Startup'
        label: 'Startup'
        description:
          - '12GB'
          - '6 CPUs'
          - '160 GB SSD disk'
        icon: 'i-heroicons-trash'
      - value: 'Business'
        label: 'Business'
        description:
          - '16GB'
          - '8 CPUs'
          - '512 GB SSD disk'
      - value: 'Enterprise'
        label: 'Enterprise'
        description:
          - '32GB'
          - '12 CPUs'
          - '1024 GB SSD disk'
      - value: 'Education'
        label: 'Education'
        disabled: true
baseProps:
  - modelValue:'Startup'
---
::


## Style

Use the color prop to change the style of the RadioGroup.



## Disabled

Use the disabled prop to disable the RadioGroup.

## Label

Use the label prop to display a label on the right of the Radio.

## Required

Use the required prop to display a red star next to the label of the Radio.

## Help

Use the help prop to display some text under the Radio.

## Slots

### `item`

Use the #label slot to override the label of each option.

### `legend`

Use the #label slot to override the label of each option.

## Props


## Config


