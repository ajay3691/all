import React, { createContext, useState } from 'react';
import Navbar from './Navabr/Navbar';
import Register from './AuthCompo/Register';
import Login from './AuthCompo/Login';
import Myprofile from './AuthCompo/Myprofile';
import Admin from './ProductCompo/Admin';
import CreateProd from './ProductCompo/CreateProd';
import UpdateProd from './ProductCompo/UpdateProd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);
  const [count, setCount] = useState(0)
  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} /> {/* Use element prop */}
            <Route path="/login" element={<Login />} /> {/* Use element prop */}
            <Route path="/myprofile" element={<Myprofile />} /> {/* Use element prop */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/createProd' element={<CreateProd />} />
            <Route path='/updateProd/:id' element={<UpdateProd />} />
          </Routes>
        </Router>
      </store.Provider>
    </div>
  );
};

export default App;
