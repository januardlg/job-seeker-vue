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
  MdDesignservices,
  HiSolidCode,
  HiSpeakerphone,
  MdOndemandvideoSharp,
  LaMusicSolid,
  RiBarChart2Fill,
  MdHealthandsafetySharp,
  HiDatabase,
  BiBookmark,
  BiArrowRightShort,
  CoFacebookF,
  CoYoutube,
  BiInstagram,
  BiTwitter,
  FaQuoteLeft,
  BiStarFill,
  FaUserCircle,
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
  MdDesignservices,
  HiSolidCode,
  HiSpeakerphone,
  MdOndemandvideoSharp,
  LaMusicSolid,
  RiBarChart2Fill,
  MdHealthandsafetySharp,
  HiDatabase,
  BiBookmark,
  BiArrowRightShort,
  CoFacebookF,
  CoYoutube,
  BiInstagram,
  BiTwitter,
  FaQuoteLeft,
  BiStarFill,
  FaUserCircle,
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.use(router)

app.mount('#app')
