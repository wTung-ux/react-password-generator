import React, { useEffect, useState } from "react"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navBarElement';
import Axios from "axios"

const Navbar = () => {
  
  const [isloggedIn, setisloggedIn] = useState([])

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if(response.data.loggedIn === true){
  //       setisloggedIn(true)
  //     }else{
  //       setisloggedIn(false)
  //     }
  //   })
  // })

  Axios.get("http://localhost:3001/login").then((response) => {
    setisloggedIn(response.data);
  })
  
  return(
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}image
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>Home</NavLink>
          
          {/* {isloggedIn && isloggedIn.length > 0 ? <NavLink to="/">Sign Out</NavLink> : 
          <NavLink to="/login.js">Log In</NavLink>
          } &nbsp; | &nbsp; */}
          
          
          <NavLink to="/account.js" activeStyle>Account</NavLink>
          <NavLink to="/genPassword.js" activeStyle>Passwords</NavLink>
        </NavMenu>
        <NavBtn>
          {isloggedIn && isloggedIn.length > 0
            ? <NavBtnLink to="/">Sign Out</NavBtnLink> 
            : <NavBtnLink to="/login.js">Log In</NavBtnLink>}
          <NavBtnLink to="/signup.js">Sign up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
    // COULDN'T DO IT THIS WAY

    // <nav>
    //   <a href="homePage.js">Logo Here</a> &nbsp; | &nbsp;
    //   <a href="login.js">Log In</a> &nbsp; | &nbsp;
    //   <a href="signup.js">Sign Up</a> 
    // </nav>

  )
}

export default Navbar