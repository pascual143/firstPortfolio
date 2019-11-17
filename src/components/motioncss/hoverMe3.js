import React from 'react';
import styled from 'styled-components';

const HoverMeDiv3 = styled.body`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #B4A12D
;
`

const HoverMe3Red = styled.a`
  border-radius: '20px';
  text-decoration: none;
  color: #351435;
  font-family: sans-serif;
  font-size: 40px;
  border: 3px solid white;
  padding: 20px 30px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
  	background-color: #F44336;
  }

  &:before {
    content: '';
  	background-color: white;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 50px;
  	position: absolute;
  	transform: translateX(-100%) rotate(45deg);
  	transition: all 0.3s;
  }

  &:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
`

function HoverMe3() {
  return(
    <div>
     <HoverMeDiv3>
        <HoverMe3Red href="#">Hover Me</HoverMe3Red>
     </HoverMeDiv3>
    </div>
  )
}

export default HoverMe3
