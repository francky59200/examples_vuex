 export const increment = ({commit}, payload)=>{
    commit('INCREMENT', payload)
 }

 export const decrement = ({commit}, payload)=>{
    commit('DECREMENT', payload)
 }

 export const add_user = ({commit}, payload)=>{
    commit('ADD_USER', payload)
 }