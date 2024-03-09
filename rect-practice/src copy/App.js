import React from 'react'
import Navbar from './navbar/Navbar'
import Admin from './Admin'
import ContactApp from './contactApp/ContactApp'
import All from './All'
import { store } from './Redux/redux/store'
import { Provider } from 'react-redux'
import Message from './Redux/Messages/Message'
import Product from './Redux/Product/Product'
import User from './Redux/User/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return <div>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      <Message />
      <Product />
      <User />
    </Provider>
    <ContactApp />
    <All />


  </div>
}

export default App
