import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
import {api} from '../../config.js';
axios.defaults.baseURL = api

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
  },
  getters: {
    loggedIn(state) {
      return state.token !== null && state.token !== undefined
    },
  },
  mutations: {
    retrieveToken(state, value) {
      state.token = value.token
    },
    destroyToken(state) {
      state.token = null
    },
  },
  actions: {
    function_name() {
      return new Promise((resolve, reject) => {
        axios.get('/')
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
  },
  modules: {
  }
})
