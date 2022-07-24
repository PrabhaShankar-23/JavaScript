import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <section className='login--logo--section'>
            <p className='loginText'>Login</p>
            <section className='contact--logos'>
                <img className='imglogo google' src=".\img\google-sign-in.png" alt="google mail" />
                <img className='imglogo facebook' src=".\img\facebook-sign-in.png" alt="facebook" />
                <img className='imglogo twitter' src=".\img\twitter-sign-in.png" alt="twitter" />
            </section>
            <section className='grey'></section>
            <hr />
            <p className='email'>Email/Username</p>
            <input 
            type="email" 
            id="email" 
            placeholder='Enter your email or username'

            name="email"></input>
            <section className='grey'></section>

            <p className='email password'>Password</p>
            <input type="password" 
            id="password" 
            placeholder=' Enter your password'           
            name="password"
            ></input>
            <section className='grey'></section>

            <p className='forgot--password'>Forgot Password?</p>
            <button className='btn--login'>LOGIN</button>
        </section>
        <section>

        <img className='pana' src=".\img\pana.png" alt="brooding writer" />

        </section>
    </div>
  )
}

export default Login