import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid className="animated fadeIn">
        <Cell col={4}>
          <p>{this.props.startYear}  {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop: '0px', textDecoration:'underline red'}}>{this.props.schoolName}</h4>
          <h5 style={{textDecoration:'underline white'}}>{this.props.schoolDescription}</h5>
          <h5 style={{fontSize: 14}}>{this.props.schoolDescription1}</h5>
          <h5 style={{fontSize: 14}}>{this.props.schoolDescription2}</h5>
          <h5 style={{fontSize: 14}}>{this.props.schoolDescription3}</h5>
          <h5 style={{fontSize: 14}}>{this.props.schoolDescription4}</h5>
          <h5 style={{fontSize: 14}}>{this.props.schoolDescription5}</h5>
          <h5 style={{fontSize: 14}}>{this.props.schoolDescription6}</h5>
          <h5 style={{fontSize: 14}}>{this.props.projectName}</h5>
          <h5 style={{fontSize: 14}}>{this.props.timeframe}</h5>
          <h5 style={{fontSize: 14}}>{this.props.people}</h5>
          <h5 style={{fontSize: 14}}>{this.props.brief}</h5>
          <h5 style={{fontSize: 14}}>{this.props.technologies}</h5>
          <h5 style={{fontSize: 14}}>{this.props.readme}</h5>

          <p>{this.props.schoolLocation}</p>
        </Cell>
      </Grid>
      // <div><h1></h1></div>
    )
  }
}

export default Education
