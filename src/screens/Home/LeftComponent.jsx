import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { ModalContext } from "../../context/ModalContext";
import Spline from "@splinetool/react-spline";

const StyledLeftComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100vh;
  background-color: #1e1e1e;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 165px;
  margin-bottom: 1rem;
`;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 0.75rem;

  span {
    font-weight: 700;
  }
`;
const SubHeading = styled.div`
  font-size: 1.5rem;
  color: #fff;
  opacity: 0.7;
  margin-bottom: 1.5rem;
`;

const AddNewButton = styled.button`
  padding: 0.25rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 4px 2px #8b8b8b;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease-in-out;
  span {
    font-size: 2rem;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
    box-shadow: 0px 0px 6px 2px #8b8b8b;
  }
`;
const LeftComponent = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <StyledLeftComponent>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Spline Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Spline scene="https://prod.spline.design/8tAywtXzdGxuvLoI/scene.splinecode" />
        </div>
        {/* Content Above Spline */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            textAlign: "center",
            paddingTop: "20%",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div style={{position:"relative",padding: "20%",paddingTop: "1%"}}>
            <AddNewButton
              onClick={() =>
                openModal({
                  show: true,
                  modalType: 3,
                  identifiers: {
                    folderId: "",
                    cardId: "",
                  },
                })
              }
            >
              <span>+</span> Create New Playground
            </AddNewButton>
          </div>
          <Logo src={logo} alt="" />
          <MainHeading style={{color:"#000629"}}>
            {" "}
            <span>Code Iz</span>
          </MainHeading>
          <SubHeading style={{color:"#061c5b",margin:'20px'}}>Code. Compile. Debug.</SubHeading>
          <div style={{color:"#061c5b",margin:'40px'}}><p>An Code Iz is a web-based platform that allows developers to write, edit, and execute code directly in a web browser and</p>
          <p>support a wide range of programming languages, such as <span> cpp, JavaScript, Python, Java</span> and more.</p></div>
          
        </div>
      </div>
    </StyledLeftComponent>
  );
};

export default LeftComponent;
