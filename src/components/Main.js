import React, {Component} from 'react';
import DataList from 'DataList';
import Divider from 'material-ui/Divider';

export class Main extends Component{
  render(){
    var header = {
      fontFamily: "Changa One",
      textAlign: "center",
      fontSize: "25px",
      overflow: "hidden"
    }

    return(
      <div>
        <h1 style={header}>NBA News</h1>
        <Divider/>
        <DataList/>
      </div>
    )
  }
}

module.exports = Main
