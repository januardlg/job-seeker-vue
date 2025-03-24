import axios from 'axios'
import router from '@/router'
export default {
  namespaced: true,

  actions: {
    login(context, payload) {
      console.log('payload login', payload)
      console.log('VITE_API_WEB_API_KEY', import.meta.env.VITE_API_WEB_API_KEY)
    },

    async register(context, payload) {
      const API_KEY = import.meta.env.VITE_API_WEB_API_KEY
      const AUTH_URL = import.meta.env.VITE_API_AUTH_URL
      const REALTIME_DATABASE_URL = import.meta.env.VITE_API_REALTIME_DATABASE_URL

      const params = new URLSearchParams()
      params.append('key', API_KEY)

      context.dispatch('handleSetIsLoadingOverlay', true, { root: true })

      try {
        const response = await axios.post(
          AUTH_URL + ':signUp',
          {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          },
          {
            params,
          },
        )
        if (response.status === 200) {
          const userId = response.data.localId
          const userRef = `${REALTIME_DATABASE_URL}/users/${userId}.json`

          try {
            const responseDatabase = await axios.put(userRef, {
              email: payload.email,
              password: payload.password,
              fullName: this.fullName,
              username: this.username,
              createdAt: new Date().toISOString(),
            })
            if (responseDatabase.status === 200) {
              context.dispatch(
                'modal/handleSetModalConent',
                {
                  variant: 'success',
                  description: 'Success Register Account',
                },
                { root: true },
              )
            }
            router.replace({ name: 'auth-login' })
          } catch (error) {
            throw new Error('Failed Add Registered Account to Database')
          } finally {
            context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
          }
        }
      } catch (error) {
        console.log('Failed To Rgister Account', error)
        context.dispatch(
          'modal/handleSetModalConent',
          {
            variant: 'error',
            description: 'Failed Register Account ' + error?.response.data?.error?.message,
          },
          { root: true },
        )
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
        context.dispatch('modal/handleSetIsOpenModal', true, { root: true })
      }
    },
  },
}
