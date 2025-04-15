import axios from 'axios'
import store from '@/store'
const REALTIME_DATABASE_URL = import.meta.env.VITE_API_REALTIME_DATABASE_URL

const api = axios.create({
  baseURL: REALTIME_DATABASE_URL,
})

api.interceptors.request.use(
  (config) => {
    const token = store.state.auth.credentialSignIn.token // Get token from Vuex store

    if (token) {
      config.params = { ...config.params, auth: token } // Attach token as `auth` query param
    }

    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('error', error.message)
      alert('Unauthorized or session expired ' + error.message)
    } else {
      alert('Failed connect to server', error.message)
    }
  },
)

export default api
