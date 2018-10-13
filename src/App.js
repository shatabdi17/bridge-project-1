import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Profile from "./Profile.js";
import { handleChangeUsername, handleChangeFirstName, login, handleLogout, fetchFollowers, fetchUsersEvents } from "./actions";

class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.loggedIn !== this.props.loggedIn) {
      if (this.props.loggedIn) {
        this.props.fetchFollowers(this.props.profile.followers_url);
        this.props.fetchUsersEvents(this.props.username)
      }
    }
  }

  render() {
    return (
      <div className="App">
      <div class="App-header">     
      <h1><svg aria-hidden="true" class="github-icon" height="60" version="1.1" viewBox="0 0 16 16" width="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
      </svg>Github Developer</h1>
      </div>
        {this.props.loggedIn ? (
          <Profile
            {...this.props.profile}
            followers={this.props.followers}
            events={this.props.events}
            handleLogOut={this.props.handleLogout}
          />
        ) : (
          <Login
            handleChangeUsername={this.props.handleChangeUsername}
            handleChangeFirstName={this.props.handleChangeFirstName}
            handleLogin={() => this.props.login(this.props.username)}
            username={this.props.username}
            firstName={this.props.firstName}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  handleChangeUsername,
  handleChangeFirstName,
  login,
  handleLogout,
  fetchFollowers,
  fetchUsersEvents,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
