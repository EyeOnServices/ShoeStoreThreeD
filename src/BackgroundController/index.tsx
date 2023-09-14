import React, { ReactNode } from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
interface BackgroundControllerProps {
  children: ReactNode;
}

const ParentContainer = styled.div`
  min-height: 100vh;
`;

const BackgroundContainer = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
  background-color: ${(props) => props.selectedColorhex};
  position: fixed;
  width : 100vw;
  height : 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -2;
  overflow: hidden;
  @media(max-width:768px){
    width:100%;
    height:100%;
  }
`;

const RectangleOne = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
 position: fixed;
   left: 0;
  top: 0;
  width: 36.25rem;
height: 28.125rem;
z-index: -2;
  background: linear-gradient(to top left, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 0 0 580px 0;
  @media(max-width:1000px){
    width: 25rem;
  }
  @media(max-width:890px){
    width: 20rem;
  }
  @media(max-width:690px){
    width: 15rem;
    height: 60vh;
  }
  @media(max-width:640px){
    width: 10rem;
   
  }
  @media(max-width:576px){
    width:7.25rem;
    height:100vh;
  }
  @media(max-width:420px){
    width:4.5rem;
    height:100vh;
  }
`;

const RectangleTwo = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
 position: fixed;
  right: 0;
  top: 0;
 width: 36.25rem;
 z-index: -2;
height: 28.125rem;
  background: linear-gradient(to top right, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 0 0 0 580px;
  @media(max-width:1000px){
    width: 25rem;
  }
  @media(max-width:890px){
    width: 20rem;
  }
   @media(max-width:690px){
    width: 15rem;
    height: 60vh;
  }
  @media(max-width:640px){
    width: 10rem;
    
  }
  @media(max-width:576px){
    width:6.25rem;
    height:100vh;
  }
  @media(max-width:420px){
    width:4.5rem;
    height:100vh;
  }
`;

const RectangleThree = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 39.375rem;
height: 25rem;
z-index: -2;
  background: linear-gradient(to top right, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 630px 630px 0 0;
  margin: 0 auto;
 
  @media(max-width:576px){
    /* height: 38rem; */
    background:none;
    width:14rem;
    left: 49%;
  }
`;



const BackgroundController = ({ children }: BackgroundControllerProps) => {

  const selectedColor = useSelector((state: RootState) => state.app.selectedColor);
  console.log(selectedColor);
  return (
    <>
      
      <BackgroundContainer selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} />
      <RectangleOne selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} ></RectangleOne>
      <RectangleTwo selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} ></RectangleTwo>
      <RectangleThree selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec}  ></RectangleThree >
      {children}
    </ >
  );
};

export default BackgroundController;

