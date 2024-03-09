import Axios from 'axios'
//action types 
const LOAD_DATA = "LOAD_DATA"
const LOADDATA_SUCCESS = "LOADDATA_SUCCESS"

//action is funciton, return actional objects
//invoking the api  data
let loadDataAction = () => {
    return async (dispatch) => {
        let users = [];
        let url = "https://jsonplaceholder.typicode.com/users"
        await Axios.get(url)
            .then((response) => {
                //console.log(response.data)
                users = response.data;
                //console.log(users);
                //console.log("inside action - before")
            })
            .catch()
        dispatch({ type: LOADDATA_SUCCESS, payload: users })
    }
}
export { loadDataAction, LOADDATA_SUCCESS, LOAD_DATA }