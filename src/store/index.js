import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example
    },
    state: {
      dark: false,
      darkText: {
        color: 'black',
      },
      darkBG: {
        background: 'white'
      },
      darkBgFront: {
        background: '#f0f0f9'
      },
      navBtn: {
        color: 'black'
      }
    },
    getters: {
      getDark: (state) => {
        return state.dark
      },
      getDarkText: (state) => {
        return state.darkText
      }
    },
    mutations: {
      updateDark(state, payload) {
        state.dark = payload
      },
      updateTextColor(state, payload) {
        state.darkText.color = payload
      },
      updateBg(state, payload) {
        state.darkBG.background = payload
      },
      updatedarkBgFront(state, payload) {
        state.darkBgFront.background = payload
      },
      updateNavBtn(state, payload) {
        state.navBtn.color = payload
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
