import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../App';

const Navbar = () => {
  const [token, setToken] = useContext(store);

  return (
    <div>
      <nav className='navbar navbar-dark bg-warning navbar-expand-lg'>
        <Link to="/index" className='navbar-brand'>Authentication</Link>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            {
              !token > 0 ? <>
                <li className='nav-list'><Link className="nav-link" to="/register">Register</Link> </li>
                <li className='nav-list'><Link className="nav-link" to="/login">Login</Link></li>
              </> : <button className="nav-link btn btn-link" onClick={() => setToken(null)}>Logout</button>
            }
          </ul>
        </div>
      </nav >
    </div >
  );
};

export default Navbar;
