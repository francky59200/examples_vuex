

export const Increment = (state, payload)=>{
    return state.count = state.count + payload
};
export const Decrement = (state, payload)=>{
    return state.count = state.count -payload
}