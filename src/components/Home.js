import React, { Component } from 'react';

class Home extends Component {
  /*
    This constructor must take "props" because this Component takes in props.
  */
  constructor(props){
    super();
    /*
      This shows the different states. Notice that "age" is a "prop" that comes
      from App.js. In this case, name={"Ricky"}.
    */
    this.state = {
      age: props.initialAge,
      homeLink: props.initialLinkName
    };
  }

  /*
    This function is defined below and fired during the onClick of a button
    below, where it says, onClick={this.onMakeYounger.bind(this)}.
  */
  onMakeYounger() {
    this.setState({
      age: this.state.age - 1
    });
  }

  /*
  This function takes the prop "changeLink" from the "App" Component.
  "changeLink" is the method "onChangeLinkName(newName)" in the "App" Component.
  */
  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  /*
    This is fired in "onChange" in the "input" area below.
    This allows one to change the name of the state of "homeLink",
    which is the "prop" that gives the Header.js its text.
  */
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  render(){
    var text = "Something!";
    return(
      <div>
        <p>Home Component</p>
        <p>My name is {this.props.name} and I am {this.state.age} years old.</p>
        <button onClick={this.onMakeYounger.bind(this)}>Make me younger.</button>
        <hr/>
        <button onClick={this.props.greet}>Greet</button>
        <hr/>
        <input
          type="text"
          value={this.state.homeLink}
          onChange={this.onHandleChange.bind(this)}
        />
        <button onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
      </div>
    );
  }
}

export default Home;
