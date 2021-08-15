import React, { Component } from 'react';
import s from './Modal.module.css';
export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }
  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
