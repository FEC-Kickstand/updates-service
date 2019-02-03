import React from 'react';
import styles from '../styles/mainNav.css';

export default class MainNav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: 'Search',
    };
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchText(e) {
    this.setState({ searchText: e.target.value });
  }

  handleSearchClick() {
    this.setState({ searchText: '' });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className={styles.mainNavBar}>
        <div>
          <span className={styles.navText}>Explore</span>
          <span className={`${styles.navText} ${styles.startProjectBtn}`}>Start a project</span>
        </div>
        <img
          alt=""
          className={styles.logoImg}
          src="https://s3-us-west-1.amazonaws.com/fec.updates/kickstand_logo.png"
        />
        <div className={styles.searchContainer}>
          <input
            onChange={this.handleSearchText}
            onClick={this.handleSearchClick}
            type="text"
            className={`${styles.navText} ${styles.searchBar}`}
            value={searchText}
          />
          <img
            alt=""
            className={styles.magnifyingGlassImg}
            src="https://s3-us-west-1.amazonaws.com/fec.updates/magnifying-glass.png"
          />
          <img
            alt=""
            className={styles.userImg}
            src="https://s3-us-west-1.amazonaws.com/fec.updates/user-circle.png"
          />
        </div>
      </div>
    );
  }
}
