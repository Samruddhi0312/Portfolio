import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_icon from '../../assets/menu-icon.png'
import close_icon from '../../assets/close-icon.jpg'



const Navbar = () => {
  const [Menu,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img className='nav-logo'  src={logo} alt="" />
      <img className='menu' onClick={openMenu} src={menu_icon} alt="" />
      
      <ul ref={menuRef} className="nav-menu">
        <img className='nav-close' onClick={closeMenu} src={close_icon} alt="" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home </p></AnchorLink>{Menu === "home"? <img src={underline}/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p> </AnchorLink>{Menu === "about"? <img src={underline}/>:<></> } </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{Menu === "portfolio"? <img src={underline}/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{Menu === "contact"? <img src={underline}/>:<></> }</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
