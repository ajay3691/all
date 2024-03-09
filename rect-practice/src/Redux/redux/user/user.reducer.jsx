import { LOADDATA_SUCCESS, LOAD_DATA } from "./user.action";
let initialState = {
    users: []
};
//pure function, taking two parameter
// initialState, action
let userReducer = (state = initialState, action) => {

    //console.log(action)
    //console.log(action.type)
    // console.log("In reducer----")
    //console.log(action.payload)

    switch (action.type) {
        case LOAD_DATA:
            return {
                users: []
            };
        case LOADDATA_SUCCESS:
            return {
                users: action.payload
            };
        default:
            return state;
    }

};

export { userReducer }