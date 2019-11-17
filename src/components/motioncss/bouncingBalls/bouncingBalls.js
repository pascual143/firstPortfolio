import React from 'react';
import './styleBounceBalls.css';
import styled from 'styled-components';


const BounceBalls = styled.body`
border-radius: '20px';
height: 200px;
display: flex;
justify-content: center;
align-items: center;
background-color: #262626;
`
const BounceBallsUl = styled.ul`
margin: 0;
padding: 0;
display: flex;
border-bottom: solid 10px white;
`
const BounceBallsUlLi = styled.li`
list-style: none;
width: 30px;
height: 30px;
background-color: white;
margin: 0 10px;
border-radius: 50%;
animation: jumping 0.8s linear infinite;
`

function CssBouncingBalls() {
    return(
      <div>
      <BounceBalls style={{ borderRadius: '20px' }}>
        <body style={{margin: '290px 10px 0px 10px' }}>
            <BounceBallsUl>
                <BounceBallsUlLi style={{animationDelay: '0.45s'}}></BounceBallsUlLi>
                <BounceBallsUlLi style={{animationDelay: '0.6s'}}></BounceBallsUlLi>
                <BounceBallsUlLi style={{animationDelay: '0.3s'}}></BounceBallsUlLi>
                <BounceBallsUlLi style={{animationDelay: '0s'}}></BounceBallsUlLi>
                <BounceBallsUlLi style={{animationDelay: '0.1s'}}></BounceBallsUlLi>
            </BounceBallsUl>
        </body>
      </BounceBalls>
      </div>
    )
}

export default CssBouncingBalls;





//class
