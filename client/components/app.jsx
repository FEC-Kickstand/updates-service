/* eslint-env browser */
import React, { Component } from 'react';
import axios from 'axios';
import Updates from './updates';
import MainNav from './mainNav';
import UpdateModal from './updateModal';

/* eslint-disable */
const HOST_URL = process.env.HOST_URL;
const HOST_PORT = process.env.HOST_PORT;
/* eslint-enable */

class App extends Component {
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
        <UpdateModal update={singleUpdate} />
        <MainNav />
        <Updates updates={updates} changeView={this.changeView} />
      </div>
    );
  }
}

export default App;
