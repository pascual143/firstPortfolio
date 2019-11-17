import React from 'react';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  33% { transform: rotate(10deg); }

  66% { transform: rotate(-10deg); }

  100% { transform: rotate(10deg); }
`

const ShakeBody = styled.body`
  border-radius: '20px';
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
`
const Shake = styled.a`
  border-radius: '20px';
  text-decoration: none;
  color: white;
  font-family: sans-serif;
  font-size: 30px;
  border: 3px solid white;
  padding: 20px 40px;
  margin: 20px;
  transition: all 0.3s;

  &:hover {
  	border: 3px solid #F44336;
  	color: #F44336;
  	animation: ${shake} 0.3s linear 1;
  }
`


function ShakeHoverMe() {
  return(
    <div>
      <ShakeBody>
        <Shake href="#" style={{ borderRadius: '20px' }}>Hover Me</Shake>
      </ShakeBody>
    </div>
  )
}

export default ShakeHoverMe
