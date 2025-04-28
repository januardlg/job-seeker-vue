<template>
  <div class="flex h-10 w-full group" @click="handleOnClickItem">
    <div
      :class="[
        isActive(link) ? 'bg-[#0A65CC]' : 'bg-white group-hover:bg-gray-300',
        'min-w-1 h-[100%] ',
      ]"
    ></div>

    <div
      :class="[
        isActive(link) ? 'bg-[#E7F0FA]' : 'bg-white group-hover:bg-gray-300',
        'flex pr-3 pl-2 py-2 cursor-pointer items-center  font-semibold w-full space-x-2',
      ]"
    >
      <v-icon
        :name="icon"
        :class="[
          isActive(link) ? 'text-[#0A65CC] ' : 'text-[#5E6670] group-hover:text-black',
          'icon',
        ]"
        scale="1.2"
      />
      <div :class="[isActive(link) ? 'text-[#0A65CC]' : 'text-[#5E6670] group-hover:text-black']">
        <slot></slot>
      </div>
      <div>{{ activeLink }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    currentRouteName() {
      const activeLink = this.$route.name
      return activeLink
    },
  },
  methods: {
    handleOnClickItem() {
      this.$router.push({ name: this.link })
    },
    isActive(name) {
      return this.currentRouteName === name
    },
  },
}
</script>