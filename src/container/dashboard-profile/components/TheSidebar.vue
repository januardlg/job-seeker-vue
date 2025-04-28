<template>
  <div>
    <p class="p-4">CANDIDATE DASHBOARD</p>

    <the-nav-item-vue
      v-for="item in listNavItem"
      :key="item.link"
      :icon="item.icon"
      :link="item.link"
      >{{ item.label }}</the-nav-item-vue
    >
  </div>
</template>

<script>
import TheNavItemVue from './TheNavItem.vue'
export default {
  components: { TheNavItemVue },
  data() {
    return {
      listNavItem: [
        {
          icon: 'co-layers',
          label: 'Overview',
          link: 'overview',
        },
        {
          icon: 'fa-suitcase',
          label: 'Applied Jobs',
          link: 'applied-jobs',
        },
        {
          icon: 'bi-bookmark',
          label: 'Favorite Jobs',
          link: 'favorite-jobs',
        },
      ],
    }
  },
}
</script>