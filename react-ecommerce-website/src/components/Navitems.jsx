import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png"
const Navitems = () => {

    const [manuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setsocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // addevent listener

    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            setHeaderFixed(true)
        }else{
            setHeaderFixed(false)
        }

    })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInup": ""}`}>
    <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
                <div className="header-top-area">
                    <Link to="/signup" className="lab-btn"><span>Create Account</span></Link>
                    <Link to="/login">Log in</Link>
                </div>
        </div>
    </div>

    <div className="header-bttom">
        <div className="container">
            <div className="header-wrapper">
                {/* {logo} */}
                <div className='logo-search-acte'>
                    <div className="logo">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                {/* {menu area} */}

                <div className="menu-area">
                    <div className="menu">
                        <ul className={`lab-ul ${manuToggle ? "active" : ""}`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                        {/* {sign in & login} */}
                        <Link to='/sign-up' className='lab-btn me-3 d-none-block'>Create Account</Link>
                        <Link to='/login'>Log In</Link>
                        
                                                {/* {manu toggler} */}
                        <div onClick={() => setMenuToggle (!manuToggle)} className={`header-bar d-lg-none $ {menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* {social toggler} */}
                        <div className='ellepsis-bar d-md-none'
                        onClick={() => setsocialToggle(!socialToggle)}
                        >
                            <i className='icofont-info-square'></i>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Navitems