import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
from {
  background-position: 0 0
}

to {
  background-position: 100% 100%
}
`

const AnimationText = styled.div`
	font-size: 110px;
	text-align: center;
	text-transform: uppercase;
	background: url('./assets/motionpics/image.jpg');
	-webkit-background-clip: text;
	color: transparent;
	animation: ${pulse} 5s linear infinite;
`
function CssAnimationText() {
    return(
      <div>
        <AnimationText>Text</AnimationText>
      </div>
    )
}

export default CssAnimationText;
