import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap, Linear } from 'gsap';
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  color: red;
  background-color: slate-grey;
  border: 1px solid red;
  border-radius: 10px;
  padding: 2%;
  margin: 3%;
    a{
      color: red;
    }
  
 
`

const NavBar = () => {
  let home = useRef(null);
  let about = useRef(null);
  let journals = useRef(null);
  let login = useRef(null);
  
  function scaleUp() {
    gsap.to(home, 1, {
      scale: 1.2,
      ease: Linear.ease
    });
  }

  function scaleDown() {
    gsap.to(home, 1, {
      scale: 1.00
    });
  }

  function scaleUp2() {
    gsap.to(about, 1, {
      scale: 1.2,
      ease: Linear.ease
    });
  }

  function scaleDown2() {
    gsap.to(about, 1, {
      scale: 1.00
    });
  }

  function scaleUp3() {
    gsap.to(journals, 1, {
      scale: 1.2,
      ease: Linear.ease
    });
  }

  function scaleDown3() {
    gsap.to(journals, 1, {
      scale: 1.00
    });
  }

  function scaleUp4() {
    gsap.to(login, 1, {
      scale: 1.2,
      ease: Linear.ease
    });
  }

  function scaleDown4() {
    gsap.to(login, 1, {
      scale: 1.00
    });
  }

  return (
    <NavStyle>
      <a href='/' ref={e => (home = e)} onMouseEnter={scaleUp} onMouseLeave={scaleDown}>Home</a>
      <a href='/' ref={e => (about = e)} onMouseEnter={scaleUp2} onMouseLeave={scaleDown2}>About</a>
      <NavLink to='/journal' ref={e => (journals = e)} onMouseEnter={scaleUp3} onMouseLeave={scaleDown3}>Journals</NavLink>
      <NavLink to='/' ref={e => (login = e)} onMouseEnter={scaleUp4} onMouseLeave={scaleDown4}>Login</NavLink>
    </NavStyle>
  )
}

export default NavBar;