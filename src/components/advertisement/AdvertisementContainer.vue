<template>
  <div
    :class="['h-[290px] bg-no-repeat rounded-xl w-full bg-cover relative']"
    :style="{ backgroundImage: `url(/images/${imageName}.png)` }"
  >
    <div class="absolute top-0 w-full p-[50px] h-full flex flex-col justify-between">
      <div class="">
        <p class="text-[32px] font-medium text-black">{{ title }}</p>
        <p class="mt-1 text-black bg-green-200/70 p-3 rounded-xl">
          {{ description }}
        </p>
      </div>
      <div>
        <TheButtonVue variant="primary-white" icon="bi-arrow-right-short"
          >Check Detail</TheButtonVue
        >
      </div>
    </div>
  </div>
</template>

<script>
import imageUrl from '../../assets/adv-image/become-candidate-adv.png'
import TheButtonVue from '../button/TheButton.vue'
export default {
  components: { TheButtonVue },
  props: {
    imageName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: imageUrl,
    }
  },
}

// :style="{ backgroundImage: `url(../../assets/adv-image/${imageName}.png)` }"
</script>
