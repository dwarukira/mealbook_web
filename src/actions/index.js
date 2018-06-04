
export const addCart = (meal, quanity) => {
    console.log(quanity);
    
    return {
        payload:{meal:meal, quanity:quanity},
        type:'ADD_CART'
    }
}

