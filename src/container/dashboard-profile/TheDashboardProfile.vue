<template>
  <div
    class="grid grid-cols-11 border-y-[1px] border-[#e4e5e8] h-[calc(100vh-200px)] container-custom"
  >
    <div class="col-span-2 flex border-r-[1px] border-[#e4e5e8]">
      <the-sidebar-vue></the-sidebar-vue>
    </div>
    <div class="col-span-9 min-h-full overflow-auto pl-10">
      <RouterView> </RouterView>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TheSidebarVue from '@/container/dashboard-profile/components/TheSidebar.vue'
export default {
  components: { TheSidebarVue, RouterView },
}
</script>