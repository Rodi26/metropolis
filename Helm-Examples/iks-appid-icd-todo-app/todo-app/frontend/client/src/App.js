
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import Header from './components/Header';
import TodoInputForm from './components/TodoInputForm';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      React.createElement("div", { id: "root" },React.createElement(Header, null),React.createElement(TodoInputForm, null))
    );
  }
}
export default TodoApp;
