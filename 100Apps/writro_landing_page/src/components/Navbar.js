import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {

  const [login, setLogin] = useState(false);
  const handleClick = () => {
    // console.log('logged in');
    setLogin(!login);
  }
  return (
    <div className='navbar'>
        <section className='navbar--logo--section'>
            <img className='logo--img' src=".\img\logo.png" alt="writro logo" />
           <Link to="/">
            <p 
            onClick={handleClick}
            className='logo--writro'>WRITRO</p>
           
           </Link>
        </section>
        <section className='sections'>
            <p>Publish</p>
            <p>Services</p>
            <p>Read</p>
            <p>Shop</p>
        </section>
        <section className='navbar-btn' >
          {
            login ? null : (
              <>
              
              <Link to="/Login">
              <button 
              // onClick={setLogin(true)}
              onClick={handleClick}
              className="btn--login-nav">
                Login
                
              </button>
         
              </Link>
              <button className="btn--signUp">Sign Up</button>              
              </>

            )
          }
         
        </section>
    </div>
  )
}

export default Navbar