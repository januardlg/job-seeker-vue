import axios from 'axios'
import router from '@/router'
const API_KEY = import.meta.env.VITE_API_WEB_API_KEY
const AUTH_URL = import.meta.env.VITE_API_AUTH_URL
const REALTIME_DATABASE_URL = import.meta.env.VITE_API_REALTIME_DATABASE_URL
let timerExpiredLogin

export default {
  namespaced: true,
  state() {
    return {
      credentialSignIn: {
        userId: undefined,
        token: undefined,
      },
      detailUser: undefined,
    }
  },
  mutations: {
    setCredentialSignIn(state, payload) {
      state.credentialSignIn.userId = payload.userId
      state.credentialSignIn.token = payload.token
    },
    setDetailuser(state, payload) {
      state.detailUser = payload
    },
  },
  actions: {
    async register(context, payload) {
      context.dispatch('handleSetIsLoadingOverlay', true, { root: true })

      try {
        const params = new URLSearchParams()
        params.append('key', API_KEY)
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
          const userRef = `${REALTIME_DATABASE_URL}/usersCandidate/${userId}.json?auth=${response.data.idToken}`

          try {
            const responseDatabase = await axios.put(userRef, {
              email: payload.email,
              password: payload.password,
              fullName: payload.fullName,
              username: payload.username,
              role: payload.role,
              createdAt: new Date().toISOString(),
            })
            if (responseDatabase.status === 200) {
              context.dispatch(
                'modal/handleSetModalContent',
                {
                  isOpenModal: true,
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
          'modal/handleSetModalContent',
          {
            isOpenModal: true,
            variant: 'error',
            description: 'Failed Register Account ' + error?.response.data?.error?.message,
          },
          { root: true },
        )
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
        // context.dispatch('modal/handleSetIsOpenModal', true, { root: true })
      }
    },
    async login(context, payload) {
      context.dispatch('handleSetIsLoadingOverlay', true, { root: true })
      try {
        const params = new URLSearchParams()
        params.append('key', API_KEY)
        const responseLogin = await axios.post(
          AUTH_URL + ':signInWithPassword',
          {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          },
          {
            params,
          },
        )
        if (responseLogin.status === 200) {
          // const expiresIn = +responseLogin?.data.expiresIn * 1000
          const expiresIn = 3600 * 1000

          const expirationDate = new Date().getTime() + expiresIn

          localStorage.setItem('userId', responseLogin?.data?.localId)
          localStorage.setItem('token', responseLogin?.data?.idToken)
          localStorage.setItem('tokenExpiration', expirationDate)

          context.commit('setCredentialSignIn', {
            userId: responseLogin?.data?.localId,
            token: responseLogin?.data?.idToken,
          })

          await context.dispatch('getUserDetail', {
            token: responseLogin?.data?.idToken,
            userId: responseLogin?.data?.localId,
          })

          timerExpiredLogin = setTimeout(function () {
            context.dispatch('autoLogout')
          }, expiresIn)

          router.push('/')
        }
      } catch (error) {
        console.log('FAILED LOGIN', error)
        context.dispatch(
          'modal/handleSetModalContent',
          {
            isOpenModal: true,
            variant: 'error',
            description: 'Failed Login ' + error?.response.data?.error?.message,
          },
          { root: true },
        )
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
      }
    },
    async getUserDetail(context, payload) {
      try {
        const responseData = await axios.get(
          `${REALTIME_DATABASE_URL}/usersCandidate/${payload.userId}.json?auth=${payload.token}`,
          {
            headers: {
              Authorization: `Bearer ${payload.token}`,
            },
          },
        )
        context.commit('setDetailuser', { ...responseData.data, uid: payload.userId })
      } catch (error) {
        console.log('FAILED GET USERS', error)
      }
    },
    async tryLogin(context, payload) {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const tokenExpiration = localStorage.getItem('tokenExpiration')

      const expiresIn = +tokenExpiration - new Date().getTime()

      if (expiresIn < 0) {
        return
      }

      timerExpiredLogin = setTimeout(function () {
        context.dispatch('autoLogout')
      }, expiresIn)

      if (token && userId) {
        context.commit('setCredentialSignIn', {
          token: token,
          userId: userId,
        })
        await context.dispatch('getUserDetail', {
          token: token,
          userId: userId,
        })
      }
    },
    async logout(context, payload) {
      context.dispatch('handleSetIsLoadingOverlay', true, { root: true })

      try {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('tokenExpiration')

        context.commit('setCredentialSignIn', {
          userId: undefined,
          token: undefined,
        })

        context.commit('setDetailuser', undefined)
        context.dispatch(
          'modal/handleSetModalContent',
          {
            isOpenModal: true,
            variant: 'success',
            description: 'Success Logout',
          },
          { root: true },
        )
        router.replace({ name: 'auth-login' })
      } catch (error) {
        console.log('ERROR', error)
      } finally {
        context.dispatch('handleSetIsLoadingOverlay', false, { root: true })
      }
    },
    async autoLogout(context, payload) {
      try {
        await context.dispatch('logout')
        clearTimeout(timerExpiredLogin)
        context.dispatch(
          'modal/handleSetModalContent',
          {
            isOpenModal: true,
            variant: 'error',
            description: 'Credential is Expired. Please Login Again',
          },
          { root: true },
          router.replace({ name: 'auth-login' }),
        )
      } catch (error) {}
    },
  },
  getters: {
    detailUser(state) {
      return state.detailUser
    },
    getCredentialUser(state) {
      return state.credentialSignIn
    },
  },
}
