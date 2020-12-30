

export const Increment = (state, payload)=>{
    payload= 20;
    return state.count = state.count + payload
}

export const Decrement =(state, payload)=>{
    if(state.count === 0){
        return state.count = 0
    }
    payload =20;
    return state.count = state.count - payload
}

export const AddMember = (state, payload)=>{
    if(!payload.title){
       return state.hasError = true
    }
    state.hasError =false
    state.members.push({id: state.members.length +1 , title: payload.title, isComplete: false})
}

export const RemoveMember =(state, id)=>{
    return state.members = state.members.filter(member => member !== id)

}

export const CompleteMember =(state, id)=>{
    let index = state.members.indexOf(id)
    state.members[index].isComplete = !state.members[index].isComplete
}