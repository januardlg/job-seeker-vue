import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiSearch,
  FaSuitcase,
  BiTelephone,
  CoLocationPin,
  PxBuildings,
  RiGroupLine,
  MdManageaccountsRound,
  BiCloudUploadFill,
  FaSearchPlus,
  MdVerifiedSharp,
} from 'oh-vue-icons/icons'

addIcons(
  BiSearch,
  FaSuitcase,
  BiTelephone,
  CoLocationPin,
  PxBuildings,
  RiGroupLine,
  MdManageaccountsRound,
  BiCloudUploadFill,
  FaSearchPlus,
  MdVerifiedSharp,
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
