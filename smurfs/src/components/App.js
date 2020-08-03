import React, { Component } from "react";
import "./App.css";

import SmurfList from "./SmurfList/smurfList";

class App extends Component {
  render() {
    // if (props.isFetching) {
    //   return <div>**fetching city data**</div>;
    // }
    return (
      <div className="App">
        <h1>Welcome to Smurf Village!</h1>
        <SmurfList />
      </div>
    );
  }
}

export default App;
