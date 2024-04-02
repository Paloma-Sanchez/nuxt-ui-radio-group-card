---
title: Radio Card Group 
description: Display a set of radio buttons.
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/Paloma-Sanchez/nuxt-ui-radio-group-card
---

## Usage

Use a `v-model` to make the RadioGroup reactive. 


### Legend

Use the `legend` prop to add a legend on the top of the RadioGroup.

::component-card-content
---
props:
  name: 'legend'
  type: ''
  legend: 'Legend'
  disabled: false
  required: false
  help: ''
  slots: ''
  options: null
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
      - value: 'Education'
        label: 'Education'
        description:
          - '6GB'
          - '2 CPUs'
          - '10 GB SSD disk'
        disabled: true
baseProps:
  modelValue: 'Startup'
---
::

### Size

Use the `size` prop to change the size of the cards in the RadioGroup.

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
    ['xs', 'sm', 'md']
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
      - value: 'Education'
        label: 'Education'
        description:
          - '6GB'
          - '2 CPUs'
          - '10 GB SSD disk'
        disabled: true
baseProps:
  modelValue: 'Business'
---
::

### Style

Use the `color` prop to change the style of the cards in the RadioGroup.

::component-card-content
---
props:
  name: 'style'
  type: ''
  legend: ''
  style: 'primary'
  disabled: false
  required: false
  help: ''
  slots: ''
  options: 
    [' primary', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyen', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
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
      - value: 'Education'
        label: 'Education'
        description:
          - '6GB'
          - '2 CPUs'
          - '10 GB SSD disk'
        disabled: true
baseProps:
  modelValue: 'Startup'
---
::

### Disabled

Use the `disabled` prop to disable the whole RadioGroup. 
Alternatively, you can pass `disabled` prop to each individual RadioCard:

::component-card-content
---
props:
  name: 'disabled'
  type: 'boolean'
  legend: ''
  disabled: false
  required: false
  help: ''
  slots: ''
  options: null
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
      - value: 'Education'
        label: 'Education'
        description:
          - '6GB'
          - '2 CPUs'
          - '10 GB SSD disk'
        disabled: true
baseProps:
  modelValue: 'Startup'
---
::

### Required

Use the `required` prop to display a red star next to the legend of the RadioGroup.
::component-card-content
---
props:
  name: 'required'
  type: 'boolean'
  legend: 'Legend'
  disabled: false
  required: false
  help: ''
  slots: ''
  options: null
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
      - value: 'Education'
        label: 'Education'
        description:
          - '6GB'
          - '2 CPUs'
          - '10 GB SSD disk'
        disabled: true
baseProps:
  modelValue: 'Startup'
---
::

### Help

Use the `help` prop to display some text under the RadioGroup legend.

::component-card-content
---
props:
  name: 'help'
  type: ''
  legend: 'Legend'
  disabled: false
  required: false
  help: 'Please choose one'
  slots: ''
  options: null
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
      - value: 'Education'
        label: 'Education'
        description:
          - '6GB'
          - '2 CPUs'
          - '10 GB SSD disk'
        disabled: true
baseProps:
  modelValue: 'Startup'
---
::

## Slots

### `item`

Use the #label slot to override the label of each option.



Use the #label slot to override the label of each option.

## Props


## Config

