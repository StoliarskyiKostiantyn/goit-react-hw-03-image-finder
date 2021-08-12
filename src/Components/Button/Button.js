import { Component } from 'react';
import s from './Button.module.css';

export default class App extends Component {
  render() {
    return (
      <button type="button" className={s.Button}>
        Load more
      </button>
    );
  }
}
