 export const increment = ({commit}, payload)=>{
    commit('INCREMENT', payload)
 }

 export const decrement = ({commit}, payload)=>{
    commit('DECREMENT', payload)
 }