import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    count: 0,
    members: [],
    message: "Welcome to my TODO and COUNT app managment",
    hasError: false
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store