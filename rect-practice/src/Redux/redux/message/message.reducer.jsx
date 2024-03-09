import { GM, GN } from "./message.action";

let initialState = {
    message: "Hello"
}
let messgeReducer = (state = initialState, action) => {
    //console.log(action)
    //console.log(action.type)
    switch (action.type) {
        case GM:
            return { message: "Good Morning" }
        case GN:
            return { message: "Good Night" }
        default:
            return state
    }
}
export { messgeReducer }