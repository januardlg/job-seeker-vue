<template>
  <div
    :class="['h-[290px] bg-no-repeat rounded-xl w-full bg-cover relative']"
    :style="{ backgroundImage: `url(/images/${imageName}.png)` }"
  >
    <div class="bg-white h-full w-full opacity-45"></div>
    <div class="absolute top-0 w-full p-[50px] h-full flex flex-col justify-between">
      <div>
        <p class="text-[32px] font-medium">{{ title }}</p>
        <p class="mt-4 text-[#636A80]">
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