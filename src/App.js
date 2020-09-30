import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './components/Welcome'
import Clothes from './components/Clothes'
import PropTypes from 'prop-types';
import './App.css';
import FU from './components/TestForceUpdate';
import Form from './components/TestForm';

 
class App extends React.Component {
  render() {
     
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.type}</li>
          <li>{this.props.public_year}</li>
          <li>{this.props.storage}</li>
        </ul>
        <FU></FU>
        <Form></Form>
      </div>
    );
  }
}
 
 // Đúng kiểu dữ liệu
App.defaultProps = {
  name: 'iPad Mini 2019',
  type: 'iPad',
  public_year: 2019,
  storage: 64
}
 
//Chỉ định validation props
App.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["iPhone", "iPad", "Mac", "SmartWatch"]),
  public_year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}
export default App;