import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { gsap, Linear } from 'gsap';
import styled from 'styled-components';
import { logout } from '../actions';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  background-color: #DEF2F1;
  // border: 1px solid #DCDCDC;
  border-radius: 10px;
  padding: 2%;
  margin: 3%;
`

const NavBar = (props) => {
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

  const signOut = () => {
    localStorage.clear('token');
    props.logout();
    // props.history.push('/');
}

  return (
    <NavStyle>
      <a href='https://distancefitness.netlify.com/' ref={e => (home = e)} onMouseEnter={scaleUp} onMouseLeave={scaleDown}>Home</a>
      <a href='https://distancefitness.netlify.com/subpages/about.html' ref={e => (about = e)} onMouseEnter={scaleUp2} onMouseLeave={scaleDown2}>About</a>
      <NavLink to='/journal' ref={e => (journals = e)} onMouseEnter={scaleUp3} onMouseLeave={scaleDown3}>Journals</NavLink>
      <NavLink to='/' ref={e => (login = e)} onMouseEnter={scaleUp4} onMouseLeave={scaleDown4} onClick={signOut}>{props.isLoggedIn ? 'Logout' : 'Login'}</NavLink>
    </NavStyle>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
      isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { logout })(NavBar);