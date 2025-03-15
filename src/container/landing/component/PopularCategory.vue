<template>
  <div class="container-custom w-full bg-white py-[100px]">
    <div class="flex justify-between items-center">
      <p class="title-section">Popular category</p>
      <TheButtonVue variant="outline">View All</TheButtonVue>
    </div>
    <div class="mt-[50px] grid grid-cols-4 gap-6">
      <CategoryItemVue
        v-for="category in listCategories"
        :key="category.title"
        :label="category.label"
        :value="category.value"
        :icon="category.icon"
        :hoveredCategory="hoveredCategory"
        @on-hover-category="onHoverCategory"
      ></CategoryItemVue>
    </div>
  </div>
</template>

<script>
import TheButtonVue from '@/components/button/TheButton.vue'
import CategoryItemVue from './CategoryItem.vue'
export default {
  components: { CategoryItemVue, TheButtonVue },
  props: {
    listCategories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      hoveredCategory: '',
    }
  },
  methods: {
    onHoverCategory(category) {
      console.log(category)
      this.hoveredCategory = category
    },
  },
}
</script>