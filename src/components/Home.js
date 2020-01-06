import React from "react";
import { getToken } from "../utils/api";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 20px auto;
  border: 1px solid black;
  width: 100%;
  max-width: 600px;
  height: 300px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100vh;
  border-radius: 10px;
  box-shadow: 5px 5px 8px #000000;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-1rem) scale(1.03);
    box-shadow: 6px 6px 20px #000000;
  }
`;

const ImageDiv = styled.div``;

const InnerDiv = styled.div`
  margin: 20px;
`;

const Buttons = styled.button`
  max-width: 100%;
  width: 200px;
  height: 50px;
  margin: 20px;
  border-radius: 10px;
  opacity: 0.8;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
  }
  box-shadow: 5px 5px 8px #000000;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-1rem) scale(1.03);
    box-shadow: 6px 6px 20px #000000;
  }
`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: blue;
`;

function Home() {
  const signedIn = getToken();
  return (
    <div>
        <ImageDiv>
          <InnerDiv>
            {!signedIn && (
              <Buttons>
                <NavLinks to="/signup" exact activeStyle={{ color: "green" }}>
                  Sign up
                </NavLinks>
              </Buttons>
            )}
           
            {!signedIn && (
              <Buttons>
                <NavLinks to="/login" exact activeStyle={{ color: "green" }}>
                  Login
                </NavLinks>
              </Buttons>
            )}
          </InnerDiv>
        </ImageDiv>
    </div>
  );
}

export default Home;