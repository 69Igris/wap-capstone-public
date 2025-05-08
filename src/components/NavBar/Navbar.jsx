import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import cart_icon from '../assets/cart_icon.png' 
import '@fortawesome/fontawesome-free/css/all.min.css'
const Navbar = () => {
    const [menu,setMenu] = useState('shop')
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <h1>Kicks<span>Vault</span></h1>
            
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu('shop')}}><Link to='/'>Home</Link>{menu==='shop' ? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu('mens')}}><Link to='/mens'>Men</Link>{menu==='mens' ? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu('womens')}}><Link to='/womens'>Women</Link>{menu==='womens' ? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link> {menu==='kids' ? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu('about')}}><Link to='/about'>About</Link>{menu==='about' ? <hr/> : <></> }</li>
            <li onClick={()=>{setMenu('contactus')}}><Link to='/contactus'>Contact Us</Link>{menu==='contactus' ? <hr/> : <></> }</li>
            <i className="fas fa-search"></i>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
        
    </div>
  )
}

export default Navbar