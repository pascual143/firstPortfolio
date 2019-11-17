import React from 'react';
import './styleLighting.css';
import styled from 'styled-components';


const Lighting = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  background-color: #262626;
`
const LightingUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`
const LightingUlLi = styled.li`
  list-style: none;
  color: #484848;
  font-size: 60px;
  letter-spacing: 10px;
  animation: lighting 1.4s linear infinite;
`

function LightingText() {
    return(
      <div>
      <Lighting style={{ borderRadius: '20px' }}>
        <div>
            <LightingUl>
                <LightingUlLi style={{animationDelay: '0s'}}>L</LightingUlLi>
                <LightingUlLi style={{animationDelay: '0.1s'}}>I</LightingUlLi>
                <LightingUlLi style={{animationDelay: '0.2s'}}>G</LightingUlLi>
                <LightingUlLi style={{animationDelay: '0.3s'}}>H</LightingUlLi>
                <LightingUlLi style={{animationDelay: '0.4s'}}>T</LightingUlLi>
            </LightingUl>
        </div>
      </Lighting>
      </div>
    )
}

export default LightingText
