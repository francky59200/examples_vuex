import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'


Vue.use(Vuex)

const state = {
    count: 0
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export  default store