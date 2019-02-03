/* eslint-env browser */
import React, { Component } from 'react';
import axios from 'axios';
import Updates from './updates';
import MainNav from './mainNav';
import UpdateModal from './modal';
import styles from '../styles/modal.css';

/* eslint-disable */
const HOST_URL = process.env.HOST_URL;
const HOST_PORT = process.env.HOST_PORT;
/* eslint-enable */

class App extends Component {
  constructor() {
    super();
    this.state = { updates: undefined, singleUpdate: undefined };
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
    // the if else below toggles background scroll off when modal opens
    if (update) {
      document.body.classList.add(`${styles.modalOpen}`);
    } else {
      document.body.classList.remove(`${styles.modalOpen}`);
    }
    this.setState({ singleUpdate: update });
  }

  render() {
    const { updates, singleUpdate } = this.state;

    return (
      <div>
        <UpdateModal update={singleUpdate} changeView={this.changeView} />
        <MainNav />
        <Updates updates={updates} changeView={this.changeView} modalOpen={!!singleUpdate} />
      </div>
    );
  }
}

export default App;
