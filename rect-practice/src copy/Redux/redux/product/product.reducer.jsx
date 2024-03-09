import { INCR, DECR } from './product.action'
let initialState = {
    name: "Samsung",
    image: 'https://rukminim1.flixcart.com/image/312/312/l0jwbrk0/mobile/a/p/r/-original-imagcb64gwkhzdk5.jpeg?q=70',
    price: 4500,
    qty: 1
}
let productReducer = (state = initialState, action) => {
    //console.log(action.type)
    switch (action.type) {
        case INCR:
            return { ...state, qty: state.qty + 1 }
        case DECR:
            return { ...state, qty: state.qty - 1 }
        default:
            return state
    }

}
export {productReducer}

//reducer is a pure fuction , it will take two Args is state, type