import React from 'react';
import { connect } from 'dva';
import styles from './App.css';

@connect()
export default class App extends React.Component {
  render = () => {
    return (
      <div className={styles.title}>画像展示页面</div>
    );
  }
}
