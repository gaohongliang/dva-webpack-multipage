import React from 'react';
import { connect } from 'dva';
import styles from './App.css';

@connect()
export default class App extends React.Component {
  render = () => {
    return (
      <div className={styles.title}>page2</div>
    );
  }
}
