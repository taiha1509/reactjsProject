//Import react vào trong dự án
import React, { Component } from "react";
 
class Welcome extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <h2>Hi {this.props.name}</h2>
      </div>
    );
  }
}
 
export default Welcome;

