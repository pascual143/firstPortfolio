import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid className="landing-grid animated fadeIn">
        <body>
          <div style={{maxWidth: "500px"}}>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Pascual Vila</h2>
            <h4 style={{ color: 'grey' }}>Software Development, Front-End, Back-End, Web Designer </h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p style={{ color:'white' }}>Creative and ambitious seeking to apply knowledge in JavaScript UI technologies – REACT, Next, NodeJs, GraphQl - and creating RESTful web services to make a direct impact on the company’s business and clients. After gaining experience in Junior Web Developer hunting for another challenges and looking to find the industry role as a Web Developer or Software Engineer.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>BS3 1EZ</p>
            <h5>Phone</h5>
            <p>07456804259</p>
            <h5>Email</h5>
            <p>pascual.vila.segura@gmail.com</p>
            <h5>Download my CV</h5>
            <p></p>
              <a href="./assets/PascualVilaCVOn.pdf" download="./assets/PascualVilaCVOn.pdf">PDF Curriculum Vitae</a>
            <p></p>
              <a href="./assets/PascualVilaCVSpn.pdf" download="./assets/PascualVilaCVSpn.pdf">PDF Curriculum Vitae in Spanish</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          </div>
          <div style={{maxWidth: "900px"}}>
          <Cell className="resume-right-col" col={8} style={{background: 'white', borderRadius: '15px' }}>
            <h2>Education</h2>
            <Education
             schoolName="GENERAL ASSEMBLY LONDON"
             startYear={2019}
             endYear={2019}
             />
             <Education
               schoolDescription="Inmerse course building rich, interactive, full-stack apps with key languages and dive into algorithms, data structures, design patterns, APIs, and more. Here some of the softwares learned"
               />
             <Education
               schoolDescription="Front End:"
               schoolDescription1="HTML, CSS, SASS, GSAP, JavaScript, REACT, StoryBook, Next, REACT-NATIVE-REDUX, THUNK, JQuery, Magento, Bulma, Bootstrap, Materialize, Squeleton,  "
               />
               <Education
               schoolDescription="Back End:"
               schoolDescription1="Nodejs, AWS, GraphQl, Apollo, Python, SQL, Mongo DB, Express, PHP, Pip"
               />
               <Education
               schoolDescription="Version Control Software: "
               schoolDescription1="Git, Git-Hub, Heroku, Agile Environment"
               />
               <Education
               schoolDescription="Manager Packages: "
               schoolDescription1="npm, yarn"
               />
               <Education
               schoolDescription="Testing: "
               schoolDescription1="JEST, Jasmine, Mocha, Chai"
               />
               <Education
               schoolDescription="Graphic Designer: "
               schoolDescription1="Photoshop, InDesign, Illustrator, Freehand, Animate CC"
               />
               <Education
               schoolDescription="Photography"
               />
               <Education
               schoolDescription="Cinema Director (Audio Visual): "
               schoolDescription1="Final Cut, Premier Pro,"
             />
             <Education
               schoolDescription="Front End:"
               schoolDescription1=" HTML, CSS, SASS, JavaScript, React, JQuery, Bulma, Bootstrap, Materialize, Squeleton,  "
               />
               <Education
               schoolDescription="Back End:"
               schoolDescription1=" Python, SQL, Mongo DB, Express, Pip"
               />
               <Education
               schoolDescription="Version Control Software: "
               schoolDescription1="Git, Git-Hub, Heroku"
               />
               <Education
               schoolDescription="Manager Packages: "
               schoolDescription1="npm, yarn"
               />
               <Education
               schoolDescription="Testing: "
               schoolDescription1="Mocha, Chai"
               />
               <Education
               schoolDescription="Graphic Designer: "
               schoolDescription1="Photoshop, InDesign, Illustrator, Freehand, Animate CC"
               />
               <Education
               schoolDescription="Photography"
               />
               <Education
               schoolDescription="Cinema Director (Audio Visual): "
               schoolDescription1="Final Cut, Premier Pro,"
             />
             <Education
              startYear={2018}
              endYear={2018}
              schoolName="UDEMY COURSES"
              schoolDescription1="Learn Python3 with exercises (Alvaro Chiuo)"
              schoolDescription2="Learning React Miguel Angel Duran)"
              schoolDescription3="Create a CRUD application with Firebase and ionic3 (Paul Halliday)"
              schoolDescription4="JavaScript Understanding the Weird parts (Anthony Alicea)"
              schoolDescription5="Ultimate Web Designer & Developer Course: Build 23 Projects (Brad Ussey)"
              schoolDescription6="Learn SVG Animation with HTML, CSS & JavaScript"
               />
            <Education
              startYear={2018}
              endYear={2018}
              schoolName="CODEACADEMY"
              schoolDescription="Web Development Path"
              schoolDescription1="PHP and SQL Path"
               />
            <Education
              startYear={2009}
              endYear={2011}
              schoolName="Master in Financial Management and Exchange, Trading"
              schoolDescription="Accounting and Trading"
              schoolLocation="EFEM, School of Business Training."
               />
            <Education
              startYear={2006}
              endYear={2007}
              schoolName="Degree in Graphic Design and Web Design"
              schoolDescription="UI Experience, Photography and technologies like Photoshop, Illustrator, After FX, InDesign, PremierPro, Final Cut"
               />
            <Education
              startYear={2003}
              endYear={2005}
              schoolName="High Degree in Audio-visual Communication"
              schoolDescription1="Studying analysis and conditioning of audiovisual production facilities."
              schoolDescription2="Treatment of sound signals (compression, equalization, sound effects, etc.)."
              schoolDescription3="Learning about the equipment of television and audio communications. Also the operation, the conservation and the repair of these equipment."
              schoolDescription4="Get the images, fixed or mobile, in any medium or format, taking responsibility for the quality."
              schoolLocation="IIES Ramón y Cajal (Murcia)"
               />
            <Education
              startYear={2000}
              endYear={2001}
              schoolName="High Degree of Photography"
              schoolDescription="Studying of photography development techniques as well as optimal framing of the image, colors and objects."
              schoolLocation="IES Alfonso X “El Sabio” (Toledo)"
               />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
              <Education
                startYear={2019}
                endYear={2019}
                schoolDescription="CURTIS FITCH, E-PROCUREMENT"
                projectName="Project: MARKETPLACE"
                brief="As a part of the front-end team, we werE developing a Marketplace to be an example to the client. In example, I  was on charge of to make elements like Footer, Basket, Sign In, Favourites..."
                technologies="Technologies: AWS, Apollo, GraphQl, Next, Intl, JEST, Jasmine, React, Storybook, JavaScript, NPM, JQuery, JIRA,"
                />
              <Education
                startYear={2018}
                endYear={2019}
                schoolDescription="PROJECT"
                projectName="Project Name: Clyma"
                timeframe="Timeframe: 9 days"
                brief="Open Brief: Application to qualify companies in relation to the amount of energy they consume and emissions they send to the environment"
                technologies="Technologies: Open source React, JavaScript, Python, Axios, Yarn, JQuery"
                readme="Specifications need: Build a full-stack application(Front End and Back End Web), use a Python Flask API, consume your API with a separate front-end, implement thoughtful user stories/wireframes, have a visually impressive design"
                people="People: solo project"
                />
                <div className="resume-right-col" style={{margin: 'auto 170px'}}>
                <Button colored href="" rel="noopener noreferrer" target="_blank" style={{margin: "0px 30px 0px 30px", background:'lightblue'}}>LiveDemo</Button>
                <Button colored href="https://github.com/pascual143/clyma" target="_black" style={{background:'lightblue'}}>GitHub</Button>
                </div>
               <Education
                schoolDescription="PROJECT"
                projectName="Project Name: Munch"
                timeframe="Timeframe: 9 days"
                brief="Briefs: Much is an agile application to review Restaurants and create new recipes as a user choosing the best ingredients you want"
                technologies="Specifications Needed: Build a Full Stack Application using your API, REACT and NoSQL Databases. Must have a login."
                people="People:   4 persons, group project"
                />
                <div className="resume-right-col" style={{margin: 'auto 170px'}}>
                <Button colored href="https://munch-ga.herokuapp.com/" rel="noopener noreferrer" target="_blank" style={{margin: "0px 30px 0px 30px", background:'lightblue'}}>LiveDemo</Button>
                <Button colored href="https://github.com/pascual143/project-3" target="_black" style={{background:'lightblue'}}>GitHub</Button>
                </div>
               <Education
                schoolDescription="PROJECT"
            		projectName="Projects Name: WEATHER APP"
                timeframe="Timeframe: 6days"
                people="People: 2 persons"
                Brief="brief: Weather is telling you the weather in any part of the world you want, adding some more relevant information like temperature. We use one API for the weather and Mapbox for a map."
                readme="Readme: The project is a React application that consumes a public API. The app include a router, consuming a public API"
                />
                <div className="resume-right-col" style={{margin: 'auto 170px'}}>
                <Button colored href="https://weather-3e996.firebaseapp.com/" rel="noopener noreferrer" target="_blank" style={{margin: "0px 30px 0px 30px", background:'lightblue'}}>LiveDemo</Button>
                <Button colored href="https://github.com/pascual143/weather/tree/master/weather-master" target="_black" style={{background:'lightblue'}}>GitHub</Button>
                </div>
               <Education
                schoolDescription="PROJECT"
            		projectName="Project Name: Connect 4"
                timeframe="Timeframe: 5 days"
                people="People: solo project"
                brief="Brief: Popular memory game to connect 4 coins in a row"
                readme="Readme: Making a Memory Game using only a Open source JavaScript, HTML and CSS. It must have: Switch turns and design logic for winning"
                schoolLocation="London"
                 />
                 <div className="resume-right-col" style={{margin: 'auto 170px'}}>
                 <Button colored href="https://connect-4-c9ed2.firebaseapp.com/" target="_blank" style={{margin: "0px 30px 0px 30px", background:'lightblue'}}>LiveDemo</Button>
                 <Button colored href="https://github.com/pascual143/WDI-Project-1" target="_blank" style={{background:'lightblue'}}>GitHub</Button>
                 </div>
            <Experience
              startYear={2008}
              endYear={2010}
              jobName="Purchase Department (field of construction)"
              jobName1="Acciona Infrastructures (Spain)"
              jobDescription="Duties: purchase and buying constructions materials in a office, record and database of the material, performance of all administrative tasks as assigned in an important construction Corporation, negotiation of flexible prices"
              />
            <Experience
              startYear={2007}
              endYear={2008}
              jobName="Real Estate Agent"
              jobName1="Group Tecnocasa (Spain)"
              jobDescription="Duties: Customer acquisition door by door, monitoring of purchase contract terms , determination of price, assistant in the acquisition of the mortgage, intermediary in negotiations between buyers and sellers"
              />
            <Experience
              endYear={2007}
              jobName="Graphic designer"
              jobName1="Gráficas Impresion(Albacete, Spain)"
              jobDescription="Duties Graphics design of logos and branding, publications, advertisement and product packaging."
              />
            <Experience
              startYear={2005}
              endYear={2007}
              jobName="Professor of computer science"
              jobName1="School San Fernando (Albacete, Spain)"
              jobDescription="Duties Basic ICT education in primary school"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />

          </Cell>
          </div>
         </body>
        </Grid>
      </div>
    )
  }
}
export default Resume;
