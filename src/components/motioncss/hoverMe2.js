import React from 'react';
import styled from 'styled-components';

const HoverMeDiv2 = styled.body`
  border-radius: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HoverMePurple2 = styled.a`
  border-radius: '20px';
  text-decoration: none;
  color: #351435;
  font-family: sans-serif;
  font-size: 30px;
  border: 3px solid #351435;
  padding: 20px 30px;
  position: relative;
  transition: all 1s;
  overflow: hidden;

  &:hover {
  	color: white;
  }

  &:before {
    content: '';
  	position: absolute;
  	left: 0;
  	top: 0;
  	height: 100%;
  	width: 100%;
  	background-color: #351435;
  	z-index: -1;
  	transform: translateY(-100%);
  	transition: all 1s;
  }

  &:hover:before {
    transform: translateY(0);
  }
`

function HoverMe2() {
  return(
    <div>
     <HoverMeDiv2>
        <HoverMePurple2 href="#">Hover Me</HoverMePurple2>
     </HoverMeDiv2>
    </div>
  )
}

export default HoverMe2
