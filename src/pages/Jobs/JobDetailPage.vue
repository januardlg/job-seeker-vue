<template>
  <the-breadcrumb-vue></the-breadcrumb-vue>
  <div>
    <TheJobDetailVue></TheJobDetailVue>
  </div>
</template>

<script>
import TheBreadcrumbVue from '@/components/breadcrumb/TheBreadcrumb.vue'
import TheJobDetailVue from '@/container/jobs/job-detail/TheJobDetail.vue'
export default {
  components: { TheBreadcrumbVue, TheJobDetailVue },
}
</script>