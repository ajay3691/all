import React, { Component } from 'react'
import UseStateMsg from './HooksRedux/1UseStateMsg'
import UsestateProduct from './HooksRedux/2UsestateProduct'
import ProductClass from './HooksRedux/3SatateProductClass'
import MsgReducer from './HooksRedux/4MsgReducer'
import UseRef from './HooksRedux/5UseRef'
import RegisterFun from './HooksRedux/6RegisterFun'
import SignUpClass from './HooksRedux/7SignUpClass'
import Register from './HooksRedux/8Register'
export class Admin extends Component {
  render() {
    return (
      <div>
        <UseStateMsg/>
        <UsestateProduct/>
        <ProductClass/>
        <MsgReducer/>
        <UseRef/>
        <RegisterFun/>
        <SignUpClass/>
        <Register/>
      </div>
    )
  }
}

export default Admin
