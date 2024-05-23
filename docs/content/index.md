---
title: Radio Card Group 
description: Display a set of radio buttons.
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/Paloma-Sanchez/nuxt-ui-radio-group-card
---

## Usage

Use a **v-model** to make the RadioGroup reactive.  

### Size

Use the **size** prop to change the size of the cards in the RadioGroup.

::component-card-content
---
props:
  name: 'size'
  type: ''
  legend: ''
  size: 'md'
  style: 'primary'
  disabled: false
  required: false
  help: ''
  slots: ''
  options: 
    ['md', 'sm', 'xs']
componentProps: 
  options: 
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
baseProps:
  modelValue: 'Business'
---
::