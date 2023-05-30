import React, { useState } from 'react'
import { NavLogo, NavSection, NavWrap, UserSection } from '../../style/common/NavbarSt'
import { FaCartPlus, FaHamburger, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import UserPop from '../user/UserPop';

const Navbar = () => {
 const [showPop, setShowPop] = useState(false);
 const [userPop, setUserPop] = useState(true);
 function showPopup(){
  setShowPop(!showPop);
 }

 function userPopup(){
  setUserPop(!userPop);
 }
  return (
    <NavWrap>
        <NavLogo>
            <p>logo</p>
        </NavLogo>
        <NavSection status={showPop}>
            <Link to="/" className='active'>Home</Link>
            <Link to="/productgallery">Product</Link>
            <Link to="/service">Service</Link>
            <Link to="/policies">Accessories</Link>
            <Link to="/contact">Contact</Link>
        </NavSection>
        <UserSection>
            <p><FaCartPlus size="20px"/></p>
            <p ><FaUserAlt 
              onClick={userPopup}
            size="20px"/></p>
            <UserPop disp={userPop}/>
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