import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


class AboutMe extends Component {
  render() {
    return(
      <div className="landing-grid" style={{border:'10px'}}>
        <Grid className="contact-grid shaker" style={{minWidth: "600px", minHeight: "1500px"}}>
          <Cell col={6}>
            <h2 style={{textDecoration:'underline red'}}>About Me</h2>
            <h2 style={{fontSize:'18px'}}>Pascual Vila</h2>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Passionate creative programmer</p>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I am passionate Web Developer and Graphic Desgner based in UK.</p>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I enjoy turning the complex problem into a simple.</p>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>When I am not coding or designing in the computer, you can find me in the gym or looking for new adventures.</p>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Other of my passions is the Photography.</p>

          </Cell>

          <Cell className="banner-text" col={6} style={{margin: "0px", padding: "10px", minWidth: "600px"}}>
              <img
                src="./assets/picabout1.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              />
              <img
                src="./assets/picabout2.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              />
              <img
                src="./assets/picabout3.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              />
              <img
                src="./assets/picabout4.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              />
              <img
                src="./assets/picabout5.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              />
              <img
                src="./assets/picabout6.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              />
              <img
                src="./assets/picabout7.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              /><img
                src="./assets/picabout8.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              />
              <img
                src="./assets/picabout9.jpg"
                alt="picabout1"
                style={{with: "200px", height: "200px", padding: "4px"}}
              />
              <img
                src="./assets/picabout10.jpg"
                alt="picabout1"
                style={{with: "150px", height: "150px", padding: "4px"}}
              />
          </Cell>
        </Grid>
      </div>
    )

  }
}

export default AboutMe;
