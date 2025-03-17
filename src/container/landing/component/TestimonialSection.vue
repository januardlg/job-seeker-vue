<template>
  <div class="bg-[#F1F2F4] py-[100px] relative">
    <div class="absolute left-[5%] top-1/2">
      <div class="p-3 bg-white rounded-md cursor-pointer active:bg-[#E7F0FA]">
        <v-icon
          @click="$refs.myVueperSlides.previous()"
          name="bi-arrow-right-short"
          class="icon rotate-180"
          scale="2"
          color="#0A65CC"
        />
      </div>
    </div>
    <div class="px-[10%]">
      <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        :slide-ratio="1 / 4"
        :dragging-distance="70"
        gap="2"
        :bullets="false"
        :bulletsOutside="false"
        :disableArrowsOnEdges="false"
        :slideContentOutside="false"
        :arrowsOutside="false"
        ref="myVueperSlides"
      >
        <vueper-slide v-for="testimoni in slides" :key="testimoni.title" class="">
          <template #content>
            <div
              class="h-full rounded-xl p-6 flex flex-col justify-between text-[#464D61]"
              :style="'background-color: white'"
            >
              <div class="space-y-4">
                <v-icon
                  v-for="(rate, index) in testimoni.rating"
                  :key="testimoni.title + index"
                  name="bi-star-fill"
                  class="icon"
                  scale="1.2"
                  color="#FFAA00"
                />
                <p class="text-[#464D61]">{{ testimoni.testi }}</p>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-3">
                  <div>
                    <v-icon name="fa-user-circle" class="icon" scale="2" color="#DADDE5" />
                  </div>
                  <div>
                    <p class="text-[#191F33]">Robert Fox</p>
                    <p class="text-sm text-[#767E94]">UI/UX Designer</p>
                  </div>
                </div>
                <v-icon name="fa-quote-left" class="icon" scale="1.5" color="#DADDE5" />
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
    <div class="absolute right-[5%] top-1/2">
      <div class="p-3 bg-white rounded-md cursor-pointer active:bg-[#E7F0FA]">
        <v-icon
          @click="$refs.myVueperSlides.next()"
          name="bi-arrow-right-short"
          class="icon"
          scale="2"
          color="#0A65CC"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [
        {
          title: 'Slide #1',
          content: 'Slide 1 content.',
          rating: 4,
          testi:
            '“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”',
        },
        {
          title: 'Slide #2',
          content: 'Slide 2 content.',
          rating: 4,
          testi:
            '“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”',
        },
        {
          title: 'Slide #1',
          content: 'Slide 1 content.',
          rating: 4,
          testi:
            '“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”',
        },
        {
          title: 'Slide #2',
          content: 'Slide 2 content.',
          rating: 5,

          testi:
            '“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”',
        },
        {
          title: 'Slide #1',
          content: 'Slide 1 content.',
          rating: 3,

          testi:
            '“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”',
        },
        {
          title: 'Slide #2',
          content: 'Slide 2 content.',
          rating: 4,
          testi:
            '“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”',
        },
      ],
    }
  },
}
</script>