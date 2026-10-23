<template>
  <div
    class="flex justify-between items-center py-6 bg-[#F1F2F4] container-custom sticky top-[130px] z-10"
  >
    <p>{{ title }}</p>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>