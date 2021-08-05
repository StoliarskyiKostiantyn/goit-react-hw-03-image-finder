import React, { Component } from "react";
export default class Searchbar extends Component {
  state = {
    text: "",
  };
  handleTextChange = (e) => {
    this.setState({ text: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim() === "") {
      alert("NAME MTHF");
      return;
    }
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="picName"
            value={this.state.text}
            onChange={this.handleTextChange}
          ></input>
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
