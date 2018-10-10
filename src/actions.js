const USER_ACTIONS = {
  CHANGE_USERNAME: "CHANGE_USERNAME",
  CHANGE_FIRST_NAME: "CHANGE_FIRST_NAME",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  FETCH_FOLLOWERS: "FETCH_FOLLOWERS",
  FETCH_EVENTS: "FETCH_EVENTS"
};


export const handleChangeUsername = e => ({
  type: USER_ACTIONS.CHANGE_USERNAME,
  payload: e.target.value,
});

export const handleChangeFirstName = e => ({
  type: USER_ACTIONS.CHANGE_FIRST_NAME,
  payload: e.target.value,
});

const getGithubUser = username => fetch(`https://api.github.com/users/${username}?per_page=100&access_token=${process.env.REACT_APP_TOKEN}`);

const getGithubUserEvents = username => fetch(`https://api.github.com/users/${username}/events?per_page=100&access_token=${process.env.REACT_APP_TOKEN}`);

const handleLogin = profile => ({
  type: USER_ACTIONS.LOGIN,
  payload: profile
})

// export const login = username => dispatch => {
//   getGithubUser(username)
//     .then(res => res.json())
//     .then(profile => dispatch(handleLogin(profile)))
// }

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)));
  getGithubUserEvents(username)
    .then(res => res.json())
    .then(events => {
      const filteredEvents = events.filter(event => event.type === "ForkEvent" || event.type === "PullRequestEvent");
      console.log(events);
      return filteredEvents;
    })
    .then(data => {
      const events = data.map(event => {
        if (event.type === "PullRequestEvent") {
          return fetch(event.payload.pull_request.url)
          .then(res => res.json())
          .then(data =>  ({...event, status: data.state, title: data.title, html_url: data.html_url }))
        } else {
          return event
        }
      });
      Promise.all([...events]).then(events => dispatch(handleEvents(events)));
    })
};

const handleEvents = events => ({
  type: USER_ACTIONS.FETCH_EVENTS,
  payload: events
})


export const handleLogout = () => ({
  type: USER_ACTIONS.LOGOUT
});

const saveFollowers = followers => ({
  type: USER_ACTIONS.FETCH_FOLLOWERS,
  payload: followers
});

const getGithubFollowing = url => fetch(url);

export const fetchFollowers = followersUrl => dispatch => {
  getGithubFollowing(followersUrl)
    .then(res => res.json())
    .then(followers => dispatch(saveFollowers(followers)));
}




