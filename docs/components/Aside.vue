<template>
  <div
    class="w-[200px] y-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3 "
  >
    <p
      class="font-semibold text-sm/6 truncate"
    >
      Table of Contents
    </p>
    <ul>
      <li
        v-for="link in h2Links"
        :key="link.label"
        class="space-y-1 lg:block font-light"
      >
        <NuxtLink
          :to="link.to"
          class="block text-sm/6 truncate text-gray-500 dark:text-gray-400  h-6"
          :class="{
            'text-primary-400': currentRoute === link?.to,
            'dark:text-primary-400': currentRoute === link?.to,
            'hover:text-gray-700': currentRoute !== link?.to,
            'dark:hover:text-gray-200': currentRoute !== link?.to,
          }" 
        >
          {{ link.label.charAt(0).toUpperCase() + link.label.slice(1) }}
        </NuxtLink>
        <ul>
          <li
            v-for="sublink in h3Links[link.label]"
            :key="sublink.label"
            class="space-y-1 ml-3 lg:block font-light"
          >
            <NuxtLink
              :to="`/#${sublink}`"
              class="block text-sm/6 truncate text-gray-500 dark:text-gray-400  h-6"
              :class="{
                'text-primary-400': currentRoute === `/#${sublink}`,
                'dark:text-primary-400': currentRoute === `/#${sublink}`,
                'hover:text-gray-700': currentRoute !== `/#${sublink}`,
                'dark:hover:text-gray-200': currentRoute !== `/#${sublink}`,
              }" 
            >
              {{ sublink.charAt(0).toUpperCase() + sublink.slice(1) }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup>
const router = useRouter();
const currentRoute = computed(() => router?.currentRoute?.value["fullPath"])
const contentQuery = await queryContent().where({ title: 'Radio Card Group' }).findOne()
const bodyChildren = contentQuery.body.children

const h2Links = []
const h3Links = {}

let h2 = ""
let newH2 = ""

for (const child of bodyChildren) {
  
  if (child.tag === "h2") {
    const link = { 
        label: child.props.id,
        to: `/#${child.props.id}`
    }

    h2Links.push(link)
    h2=newH2
    newH2=child.props.id

  } else if (child.tag === "h3" && h2!==newH2) {
    const link = child.props.id

    h3Links[newH2] = ({
        ...h3Links[newH2],
        [link]:link
    })
  }
}

</script>
<style scoped>
.current {
    text-decoration: underline;
    color: red;
    pointer-events: none;
}
  
</style>