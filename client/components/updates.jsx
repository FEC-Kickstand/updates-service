/* eslint-env browser */
import React from 'react';
import axios from 'axios';
import styles from '../styles/updates.css';
import PreviewsList from './previewsList';

/* eslint-disable */
const HOST_URL = process.env.HOST_URL;
const HOST_PORT = process.env.HOST_PORT;
/* eslint-enable */

class App extends React.Component {
  constructor() {
    super();
    this.state = { updates: null, singleUpdate: null };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    const splitURL = window.location.href.split('/');
    const projectId = Number(splitURL[splitURL.length - 1]) || 7;
    axios
      .get(`${HOST_URL}:${HOST_PORT}/${projectId}/updates`)
      .then((updates) => {
        this.setState({ updates: updates.data });
      })
      .catch(err => console.log(err));
  }

  changeView(update) {
    this.setState({ singleUpdate: update });
  }

  render() {
    const { updates, singleUpdate } = this.state;

    return (
      <div>
        {/* <UpdateModal update={singleUpdate} /> */}
        <div className={styles.wrapper}>
          <div className={styles.verticalMargin} />
          <PreviewsList changeView={this.changeView} updates={updates} />
          <div className={styles.verticalMargin} />
        </div>
      </div>
    );
  }
}

export default App;

/*
<div />
          {
            singleUpdate ? <UpdateModal update={singleUpdate} />
              : <PreviewsList changeView={this.changeView} updates={updates} />
          }
          <div />
*/
