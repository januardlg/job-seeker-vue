<script>
import { RouterLink, RouterView } from 'vue-router'
import TheFooterVue from './components/footer/TheFooter.vue'
import TheLoadingOverlayVue from './components/loading/TheLoadingOverlay.vue'
import TheModalVue from './components/modal/TheModal.vue'
import TheHeaderVue from './components/nav/TheHeader.vue'

export default {
  components: { RouterView, TheFooterVue, TheHeaderVue, TheLoadingOverlayVue, TheModalVue },
  computed: {
    isLoadingOverlay() {
      return this.$store.state.isLoadingOverlayOpen
    },
  },
  created() {
    this.$store.dispatch('auth/tryLogin')
  },
}
</script>

<template>
  <TheLoadingOverlayVue v-if="isLoadingOverlay"></TheLoadingOverlayVue>

  <RouterView> </RouterView>

  <!-- <TheHeaderVue />
  <div class="min-h-screen pb-[100px]">
    <RouterView> </RouterView>
    <TheLoadingOverlayVue v-if="isLoadingOverlay"></TheLoadingOverlayVue>
  </div>
  <TheFooterVue /> -->

  <!-- Open the modal using ID.showModal() method -->
  <the-modal-vue></the-modal-vue>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
