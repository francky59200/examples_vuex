import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        count : 0
    },
    // les mutations permettent de modifier le state avec le payload (data s'il y'en a)
    mutations : {
        increment (state, payload){
            state.count = state.count + payload.amount
        },
        decrement(state, payload){
            state.count = state.count - payload.amount
        }
    },
    // les actions permettent de lancer la mutation du state avec le commit sur la mutation et le payload
    actions : {
        increment(context, payload){
            context.commit('increment', payload)
        },
        decrement(context, payload){
            context.commit('decrement', payload)
        }
    }
})