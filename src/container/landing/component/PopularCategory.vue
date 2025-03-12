<template>
  <div class="container-custom w-full bg-white py-[100px]">
    <div class="flex justify-between items-center">
      <p class="title-section">Popular category</p>
      <p>View All</p>
    </div>
    <div class="mt-[50px] grid grid-cols-4">
      <CategoryItemVue
        v-for="category in listCategories"
        :key="category.title"
        :label="category.label"
        :value="category.value"
      ></CategoryItemVue>
    </div>
  </div>
</template>

<script>
import CategoryItemVue from './CategoryItem.vue'
export default {
  components: { CategoryItemVue },
  props: {
    listCategories: {
      type: Array,
      required: true,
    },
  },
  methods: {},
}
</script>