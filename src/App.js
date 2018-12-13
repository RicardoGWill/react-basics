import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

  constructor(){
    super();
    /*
    The state of "homeLink" is first set to "Header", where it shows up
    in Header.js.
    Passing the prop to Header.js is: homeLink={this.state.homeLink}
    Receiving the prop in Header.js is: {props.homeLink} .
    */
    this.state = {
      homeLink: "Header"
    };
  }

  /*
    This function is fired when {this.props.greet} is initiated by a button's
    onClick in Home.js. Below, it shows that greet={this.onGreet}.
  */
  onGreet() {
    alert("Hello!");
  }

  /*
  This takes "homeLink", which starts with the state of "Header" (see above)
  and changes it to a "newName". This function is called when the
  onChangeLink() method is called during a button onClick in Home.js.
  */
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <Header homeLink={this.state.homeLink}/>
        </div>
        <div className="App">
          <Home
            name={"Ricky"}
            initialAge={38}
            greet={this.onGreet}
            changeLink={this.onChangeLinkName.bind(this)}
            initialLinkName={this.state.homeLink}
          />
        </div>
      </div>
    );
  }
}

export default App;
