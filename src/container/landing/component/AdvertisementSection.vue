<template>
  <div class="container-custom w-full bg-white py-[100px]">
    <div class="grid grid-cols-2 gap-6">
      <AdvertisementContainerVue
        v-for="advertisement in listAdvertisement"
        :key="advertisement.label"
        :imageName="advertisement.imageName"
        :title="advertisement.title"
        :description="advertisement.description"
      ></AdvertisementContainerVue>
    </div>
  </div>
</template>

<script>
import AdvertisementContainerVue from '@/components/advertisement/AdvertisementContainer.vue'
export default {
  components: {
    AdvertisementContainerVue,
  },
  props: {
    listAdvertisement: {
      type: Array,
      required: true,
    },
  },
}
</script>