<template>
  <the-modal-container-vue>
    <div>
      <div class="w-2xl">
        <p class="text-xl font-semibold">Apply Job : {{ openedJobDetail.title }}</p>
      </div>
      <div class="mt-6 block space-y-1">
        <div><label for="cv" class="font-medium text-[#767F8C] text-sm">Choose Resume*</label></div>
        <div
          class="relative w-2xl border-[1px] border-[#e4e5e8] h-10 flex items-center rounded-md px-2 justify-between"
        >
          <p>{{ selectedFileName }}</p>
          <label for="upload">
            <span class="" aria-hidden="true"
              ><div
                class="bg-[#0A65CC] h-6 cursor-pointer px-3 flex items-center rounded-sm text-white"
              >
                Upload
              </div></span
            >
            <input
              name="cv"
              type="file"
              id="upload"
              style="display: none"
              @change="handleImage"
              accept="file/*"
            />
          </label>
          <!-- <input
            name="cv"
            type="file"
            @change="handleImage"
            accept="file/*"
            class="file:absolute file:right-0 file:bg-[#0A65CC] file:h-6 file:text-white file:border-0 file:cursor-pointer file:px-3 file:rounded-sm file:shadow-xl"
          /> -->
        </div>
      </div>
      <div class="mt-6 block space-y-1 text-sm">
        <div><label for="cv" class="font-medium text-[#767F8C]">Cover Letter</label></div>
        <textarea
          class="textarea w-2xl border-[#e4e5e8] rounded-md text-lg focus:border-[#101828] focus:outline-none"
          placeholder="Write down your biography here"
          rows="6"
          v-model="coverLetter"
        ></textarea>
      </div>
    </div>
    <template #action>
      <div class="flex justify-between mt-8">
        <the-button-vue variant="outline" @click="handleCloseModal">Cancel</the-button-vue>
        <the-button-vue
          icon="bi-arrow-right-short"
          @click="handleClickSubmitApply"
          :variant="base64FileCV ? 'primary' : 'disabled'"
          >Apply Now</the-button-vue
        >
      </div>
    </template>
  </the-modal-container-vue>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import TheButtonVue from '@/components/button/TheButton.vue'
import TheModalContainerVue from '@/components/modal/TheModalContainer.vue'
export default {
  components: { TheModalContainerVue, TheButtonVue },
  data() {
    return {
      selectedFileName: null,
      base64FileCV: null,
      coverLetter: null,
    }
  },
  computed: {
    ...mapState('jobs', ['openedJobDetail']),
  },
  methods: {
    ...mapActions('modal', ['handleSetIsOpenCustomModal', 'onSubmitApply']),
    ...mapActions('jobs', ['onSubmitApply']),
    handleImage(e) {
      const selectedImage = e.target.files[0]
      this.createBase64Image(selectedImage)
      this.selectedFileName = selectedImage.name
      console.log({ selectedImage })
    },
    createBase64Image(fileObject) {
      const reader = new FileReader()

      reader.readAsDataURL(fileObject)
      reader.onloadend = () => {
        // const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')
        const base64String = reader.result
        this.base64FileCV = base64String
      }
    },
    async handleClickSubmitApply() {
      try {
        await this.onSubmitApply({
          base64CV: this.base64FileCV,
          coverLetter: this.coverLetter,
        })
      } catch (error) {
      } finally {
        this.selectedFileName = null
        this.base64FileCV = null
        this.coverLetter = null
      }
    },
    handleCloseModal() {
      console.log('CLOSE MODAL')
      this.handleSetIsOpenCustomModal(false)
      this.base64FileCV = null
      this.coverLetter = null
      this.selectedFileName = null
    },
  },
}
</script>