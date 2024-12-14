import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const NavbarContainer = styled.div`
  height: ${({isFullScreen}) => isFullScreen ? '0' : '3rem'};
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavbarContent = styled.button`
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const Logo = styled.img`
  width: 50px;
`

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;

  span{
    font-weight: 700;
  }
`

const NavbarComponent = ({ isFullScreen }) => {

  return (
    <NavbarContainer style={{
      position: "relative",
      zIndex: 1,
      color: "white",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    }} isFullScreen={isFullScreen}>
      <NavbarContent onClick={() => {
      
      }}>
        <Logo src={logo} />
        <MainHeading>
          <span>Code</span> Iz
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default NavbarComponent