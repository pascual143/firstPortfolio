import React from 'react';
import styled from 'styled-components';

const HoverMeDiv = styled.body`
  background: powderBlue;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

const HoverMeYellow = styled.a`
  border-radius: '20px';
  text-decoration: none;
  color: #262626;
  font-family: sans-serif;
  font-size: 30px;
  border: 3px solid #262626;
  padding: 20px 30px;
  position: relative;
  overflow: hidden;
  z-index: 1;


  &:before {
  	content: '';
  	position: absolute;
  	left: 0;
  	top: 0;
  	background-color: #fff200;
  	height: 100%;
  	width: 100%;
  	transform-origin: bottom left;
   	transform: rotate(-90deg);
  	transition: transform 1s;
    overflow: hidden;
  }

  &:hover:before {
  	transform: rotate(0deg);
  }
`


function HoverMe1() {
  return(
    <div>
     <HoverMeDiv>
        <HoverMeYellow href="#" styled={{  overflow: 'hidden' }}>Hover Me</HoverMeYellow>
     </HoverMeDiv>
    </div>
  )
}

export default HoverMe1
