export const INCREMENT = (state, payload)=>{
    payload = 10
    return state.count = state.count + payload
}

export const DECREMENT =(state, payload)=>{
    if(state.count === 0){
        return state.count =0
    }
    payload = 10
    return state.count = state.count - payload
}