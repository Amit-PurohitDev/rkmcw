import React, { useState } from 'react'
import { NavLogo, NavSection, NavWrap, UserSection } from '../../style/common/NavbarSt'
import { FaCartPlus, FaHamburger, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
 const [showPop, setShowPop] = useState(false);
 function showPopup(){
  setShowPop(!showPop);
 }
  return (
    <NavWrap>
        <NavLogo>
            <p>logo</p>
        </NavLogo>
        <NavSection status={showPop}>
            <Link to="/" className='active'>Home</Link>
            <Link to="/shop">Product</Link>
            <Link to="/service">Service</Link>
            <Link to="/policies">Accessories</Link>
            <Link to="/contact">Contact</Link>
        </NavSection>
        <UserSection>
            <p><FaCartPlus size="20px"/></p>
            <p><FaUserAlt size="20px"/></p>
        </UserSection>
        <FaHamburger 
        className='hamburger'
        onClick={showPopup}
        style={{
          color:"#ff2c53"
        }}/>
    </NavWrap>
  )
}

export default Navbar