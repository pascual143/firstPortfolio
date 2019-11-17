import React, { Component } from 'react';
import { Cell, Grid, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="landing-grid">
        <Grid className="contact-grid dealWithIt">
        <Cell col={12} className="animated fadeIn">
          <div style={{textAlign: 'center'}}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              style={{height: '130px'}}
               />
               <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Passionate creative</p>

          </div>

              <h2>Pascual Vila</h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
              <p>Creative and ambitious seeking to apply knowledge in JavaScript UI technologies – REACT, Next, NodeJs, GraphQl - and creating RESTful web services to make a direct impact on the company’s business and clients. After gaining experience in Junior Web Developer hunting for another challenges and looking to find the industry role as a Web Developer or Software Engineer.</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
              <h2>Contact Me</h2>
          <div className="container">
          <ListItem>
            <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
              <i className="fa fa-phone-square" aria-hidden="true"/>
                   07456804259
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
              <i className="fa fa-envelope" aria-hidden="true"/>
                   pascual.vila.segura@gmail.com
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
              <i className="fa fa-skype" aria-hidden="true"/>
                   pascual143
            </ListItemContent>
          </ListItem>
          </div>
              <h5>Address</h5>
              <p>BS3 1EZ</p>
              <h5>Download my CV</h5>
              <p></p>
                <a href="./assets/PascualVilaCVOn.pdf" download="./assets/PascualVilaCVOn.pdf">PDF Curriculum Vitae</a>
                <br></br>
                <a href="./assets/PascualVilaCVSpn.pdf" download="./assets/PascualVilaCVSpn.pdf">PDF Curriculum Vitae in Spanish</a>
              <p></p>
        </Cell>
                <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
        </Grid>
      </div>
    )

  }
}

export default Contact;
