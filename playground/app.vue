<template>
  <div>
    Nuxt module playground!
  </div>
  <div
    class="flex"
  >
    <radioGroupCard
      v-model="selected"
      :options="options"
      legend="helle wordl"
      color="violet"
      required
      variant="ghost"
      help="Please choose one" 
    />
    <radioGroupCard
      v-model="selected"
      :options="options"
      :model-value="selected"
      legend="helle wordl"
      variant="outline"
      color="violet"
      :ui-radio="{label:'text-lg'}"
    />
    <radioGroupCard
      v-model="selected"
      :options="options"
      :model-value="selected"
      legend="helle wordl"
      variant="outline"
      color="violet"
      :ui-radio="{background:{unchecked:'bg-white'},
      }"
    >
      <template #trailing="{ option }">
        <div class="pl-4">
          <p>{{ 'Selected' }}</p>
        </div>
      </template>
    </radioGroupCard>
  </div> 
 
  <radioGroupCard
    v-model="selected"
    :options="options2"
    size="sm"
    legend="hello twice"
    color="red"
    bord-only
  />
  <radioGroupCard
    v-model="selected"
    :options="options2"
    :model-value="selected"
    size="sm"
    legend="hello twice"
    color="red"
    bord-only
    variant="outline"
  >
    <template #tailing="{ option }">
      <p class="italic">
        {{ option.label }}
      </p>
    </template>
  </radioGroupCard>
  <radioGroupCard
    v-model="selected"
    :options="options3"
    :model-value="selected"
    size="xs"
    legend="hello 3x"
    color="sky"
  />
  <radioGroupCard
    v-model="selected"
    :options="options3"
    :model-value="selected"
    size="xs"
    legend="hello 3x"
    color="sky"
    variant="outline"
  />
  <radioGroupCard
    v-model="selected"
    :options="options2"
    :model-value="selected"
    size="sm"
    legend="hello 4th time"
    color="primary"
    variant="black"
  />
</template>

<script setup>
const options = [
  {
    value: 'Startup',
    label: 'Startup',
    description:['12GB', '6 CPUs', '160 GB SSD disk'],
    icon:'i-heroicons-trash'
  },
  {
    value: 'Business',
    label: 'Business',
    description:['16GB', '8 CPUs', '512 GB SSD disk'],
  },
  {
    value: 'Enterprise',
    label: 'Enterprise',
    description:['32GB', '12 CPUs', '1024 GB SSD disk'],
  },
  {
    value: 'Education',
    label: 'Education',
    //description:['6GB', '3CPUs', '80 GB SSD disk'],
    disabled: true
  },
];

const options2 =[
  {
    value: 'Standard',
    label: 'Standard',
    description:['4-10 business days', '$5.00']
  },
  {
    value: 'Express',
    label: 'Express',
    description:['2-5 business days', '$15.00']
  },
  {
    value: 'Super Fast',
    label: 'Super Fast',
    description:['1 business day', '$25.00']
  }
]

const options3 = [
  {
    value:'4 GB',
    label:'4 GB'
  },
  {
    value:'8 GB',
    label:'8 GB'
  },
  {
    value:'16 GB',
    label:'16 GB'
  },
  {
    value:'32 GB',
    label:'32 GB'
  },
]
const selected = ref(options[0].value);

/*  */
</script>


