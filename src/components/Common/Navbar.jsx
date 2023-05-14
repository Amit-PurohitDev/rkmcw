import React from 'react'
import { NavLogo, NavSection, NavWrap, UserSection } from '../../style/common/NavbarSt'
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavWrap>
        <NavLogo>
            <p>logo</p>
        </NavLogo>
        <NavSection>
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
    </NavWrap>
  )
}

export default Navbar