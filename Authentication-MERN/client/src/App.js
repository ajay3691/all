import React, { createContext, useState } from 'react';
import Navbar from './Navabr/Navbar' ; 
import Register from './Components/Register';
import Login from './Components/Login';
import Myprofile from './Components/Myprofile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} /> {/* Use element prop */}
            <Route path="/login" element={<Login />} /> {/* Use element prop */}
            <Route path="/myprofile" element={<Myprofile />} /> {/* Use element prop */}
          </Routes>
        </Router>
      </store.Provider>
    </div>
  );
};

export default App;
