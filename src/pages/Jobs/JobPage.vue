<template>
  <TheHeaderVue />
  <div class="min-h-screen pb-[100px]">
    <RouterView> </RouterView>
  </div>
  <TheFooterVue />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'

import TheHeaderVue from '../../components/nav/TheHeader.vue'
import TheFooterVue from '../../components/footer/TheFooter.vue'

export default {
  components: { RouterView, TheFooterVue, TheHeaderVue },
}
</script>