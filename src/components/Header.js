/*
This is a stateless component that takes in the prop, "homeLink".
*/
import React, { Component } from 'react';

const Header = (props) => {
    return (
      <div>
        <a href="#">{props.homeLink}</a>
      </div>
    );
};

export default Header;
