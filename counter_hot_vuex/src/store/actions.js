export const increment = (context, payload)=>{
    payload =20;
    context.commit('Increment', payload)
}

export const decrement = (context, payload)=>{
    payload = 20
    context.commit('Decrement', payload)
}
