<template>
  <p class="font-medium text-2xl mb-6">Settings</p>
  <div class="grid grid-cols-10 gap-6">
    <div class="col-span-2">
      <div class="block space-y-2 cursor-pointer">
        <p>Profile Picture</p>
        <div class="w-full h-full relative group">
          <img class="w-[220px] object-cover h-[240px]" alt="Profile" :src="profilePhoto" />
          <div
            class="w-full h-full absolute top-0 bg-gray-300 opacity-80 hidden group-hover:flex cursor-pointer"
          >
            <div class="flex items-center justify-center h-full w-full p-6 text-center">
              <label for="upload">
                <div class="cursor-pointer">
                  <v-icon name="bi-cloud-upload" class="icon" scale="3" color="#0A65CC" />

                  <p class="font-medium text-lg">Change photo</p>
                  <p class="text-sm">Max photo size 5 MB</p>
                  <input
                    name="profile-picture"
                    type="file"
                    id="upload"
                    style="display: none"
                    @change="handleUploadProfilePicture"
                    accept="image/jpeg, image/png, image/jpg"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-4 space-y-5">
      <div class="block space-y-2">
        <div><label for="username">Username</label></div>
        <input name="username" class="input-vue" placeholder="Username" v-model="username" />
      </div>
      <div class="block space-y-2">
        <div><label for="fullName">Full Name</label></div>
        <input name="fullName" class="input-vue" placeholder="Fullname" v-model="fullName" />
      </div>

      <div class="block space-y-2">
        <div><label for="gender">Gender</label></div>
        <select id="gender" name="gender" v-model="gender" class="input-vue">
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
    </div>
    <div class="space-y-5 col-span-4">
      <div class="block space-y-2">
        <div><label for="education">Education</label></div>
        <select id="education" name="education" v-model="education" class="input-vue">
          <option value="highschool">High School</option>
          <option value="bachelor">Bachelor</option>
          <option value="master">Master</option>
        </select>
      </div>
      <div class="block space-y-2">
        <div><label for="experience">Experience</label></div>
        <select id="experience" name="experience" v-model="experience" class="input-vue">
          <option value="0">0 Year</option>
          <option value="1">1-3 Year</option>
          <option value="3">3-5 Year</option>
          <option value="5">More than 5 Year</option>
        </select>
      </div>
      <div class="block space-y-2">
        <div><label for="title">Yout Title or Position</label></div>
        <input
          name="title"
          class="input-vue"
          placeholder="Your title or position"
          v-model="title"
        />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-10 gap-6 mt-2">
    <div class="col-span-2"></div>
    <div class="col-span-8">
      <div class="block space-y-2">
        <div><label for="portofolio">Portofolio URL</label></div>
        <input
          name="portofolio"
          class="input-vue"
          placeholder="Portofolio Url"
          v-model="portofolio"
        />
      </div>
    </div>
  </div>
  <div class="mt-10 flex justify-end">
    <the-button-vue @on-click-button="handleSubmitSave">Save Changes</the-button-vue>
  </div>
</template>

<script>
import TheButtonVue from '@/components/button/TheButton.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { TheButtonVue },
  data() {
    return {
      fullName: '',
      username: '',
      gender: '',
      title: '',
      education: '',
      experience: '',
      profilePhoto: '',
      portofolio: '',
    }
  },
  computed: {
    ...mapGetters('settings', ['allProfileDetail']),
  },
  methods: {
    ...mapActions('settings', ['fetchProfileDetail', 'onSubmitSaveChanges']),
    handleSubmitSave() {
      this.onSubmitSaveChanges({
        fullName: this.fullName,
        username: this.username,
        title: this.title,
        gender: this.gender,
        education: this.education,
        experience: this.experience,
        profilePhoto: this.profilePhoto,
        portofolio: this.portofolio,
      })
    },
    handleUploadProfilePicture(e) {
      const reader = new FileReader()

      const selectedImage = e.target.files[0]
      reader.readAsDataURL(selectedImage)
      reader.onloadend = () => {
        const base64String = reader.result
        this.profilePhoto = base64String
      }
    },
  },
  async created() {
    await this.fetchProfileDetail()
    this.fullName = this?.allProfileDetail?.fullName
    this.username = this?.allProfileDetail?.username
    this.gender = this?.allProfileDetail?.gender
    this.title = this?.allProfileDetail?.title
    this.education = this?.allProfileDetail?.education
    this.experience = this?.allProfileDetail?.experience
    this.profilePhoto = this?.allProfileDetail?.profilePhoto
    this.portofolio = this?.allProfileDetail?.portofolio
  },
  mounted() {},
}
</script>