import LoadingBar from 'react-redux-loading-bar';
import React from 'react';
import { connect } from 'dva';
import styles from './App.css';

@connect()
export default class App extends React.Component {
  render = () => {
    return (
      <div>
        <LoadingBar className="loadingBar" />
        <div className={styles.title}>page1</div>
      </div>
    );
  }
}
