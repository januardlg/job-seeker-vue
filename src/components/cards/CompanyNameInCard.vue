<template>
  <div class="flex items-center space-x-3">
    <div class="p-2 bg-[#EDEFF5] rounded-sm">
      <v-icon name="px-buildings" class="icon" color="#0A65CC" scale="1.3" />
    </div>
    <div>
      <p class="text-[16px] font-medium">{{ companyName }}</p>
      <div class="flex space-x-0.5 items-center">
        <v-icon name="co-location-pin" class="icon" color="#767F8C" scale="1" />
        <p class="text-sm font-normal text-[#767F8C]">{{ location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
}
</script>