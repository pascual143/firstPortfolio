import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="">
    {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
  <Layout>
      <Header className="BodyLandingResume" title={<Link style={{textDecoration: 'none', color: 'black'}}
      to="/">Pascual Vila</Link>} scroll>
          <Navigation>
              <Link to="/resume" style={{textDecoration: 'none', color: 'black'}}>Resume</Link>
              <Link to="/projects" style={{textDecoration: 'none', color: 'black'}}>Projects</Link>
              <Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>Contact</Link>
              <Link to="/aboutme" style={{textDecoration: 'none', color: 'black'}}>About Me</Link>
          </Navigation>
      </Header>
      <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}
      to="/">MyPorfolio</Link>}>
          <Navigation>
              <Link to="/resume" style={{textDecoration: 'none', color: 'black'}}>Resume</Link>
              <Link to="/projects" style={{textDecoration: 'none', color: 'black'}}>Projects</Link>
              <Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>Contact</Link>
              <Link to="/aboutme" style={{textDecoration: 'none', color: 'black'}}>About Me</Link>
          </Navigation>
      </Drawer>
      <Content>
          <div className="page-content" />
          <Main/>
      </Content>
  </Layout>
</div>
    </div>
  );
}

export default App;
