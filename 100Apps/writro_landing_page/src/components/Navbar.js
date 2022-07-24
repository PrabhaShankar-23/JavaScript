import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
        <section className='navbar--logo--section'>
            <img className='logo--img' src=".\img\logo.png" alt="writro logo" />
            <p className='logo--writro'>WRITRO</p>
        </section>
        <section className='sections'>
            <p>Publish</p>
            <p>Services</p>
            <p>Read</p>
            <p>Shop</p>
        </section>
        <section className='navbar-btn' >
          <button className="btn--login">Login</button>
          <button className="btn--signUp">Sign Up</button>
        </section>
    </div>
  )
}

export default Navbar