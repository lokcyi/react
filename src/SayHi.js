import React, { Component } from 'react';

class SayHi extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    //this.handleClick = this.handleClick.bind(this);
    this.state = {date: new Date()};
  }
  
  // handleClick() {
  //   this.setState({date: new Date()});
  // }

  handleClick  = () => {
    this.setState({date: new Date()});
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps:'+nextProps.name);
    console.log('nextState:'+nextState.date);
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  render() {
    return <h1 onClick={this.handleClick}>{this.state.date.toLocaleTimeString()}Hello  , {this.props.name}</h1>;
  }
}

export default SayHi;