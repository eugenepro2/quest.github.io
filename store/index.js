import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './tasks'
import user from './user'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      tasks, user
    }
  })
}