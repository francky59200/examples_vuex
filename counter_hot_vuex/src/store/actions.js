export const increment = (context, payload)=>{
    context.commit('Increment', payload)
}

export const decrement = (context, payload)=>{
    context.commit('Decrement', payload)
}

export const addMember = (context, payload)=>{
    context.commit('AddMember', payload)
}

export const removeMember = ({ commit }, id)=>{
    console.log('my world')
    commit('RemoveMember', id)
}

export const completeMember =({ commit }, id)=>{
    commit('CompleteMember', id)
}
