import { combineReducers } from "redux";
import { messgeReducer } from "./message/message.reducer";
import { productReducer } from "./product/product.reducer";
import {userReducer} from './user/user.reducer'

let rootReducer = combineReducers({ message: messgeReducer, product:productReducer,users: userReducer  })
export { rootReducer }
