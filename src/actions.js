export const USER_ACTIONS = {
  CHANGE_USERNAME: "CHANGE_USERNAME",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SAVE_FORKED_REPOS: "SAVE_FORKED_REPOS",
  SAVE_PULL_REQUESTS: "SAVE_PULL_REQUESTS",
};

export const handleChangeUsername = e => ({
  type: USER_ACTIONS.CHANGE_USERNAME,
  payload: e.target.value,
});

const getGithubUser = username => fetch(`https://api.github.com/users/${username}?per_page=100&access_token=${process.env.REACT_APP_TOKEN}`);

const handleLogin = profile => ({
  type: USER_ACTIONS.LOGIN,
  payload: profile
})

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)));
};

const getGithubUserEvents = username => fetch(`https://api.github.com/users/${username}/events?per_page=100&access_token=${process.env.REACT_APP_TOKEN}`);

const handleForkedRepositories = repos => ({
  type: USER_ACTIONS.SAVE_FORKED_REPOS,
  payload: repos
})

const handlePullRequests = pullRequests => ({
  type: USER_ACTIONS.SAVE_PULL_REQUESTS,
  payload: pullRequests
})

const FORK_EVENT = 'ForkEvent';
const PULL_REQUEST_EVENT = 'PullRequestEvent';

export const fetchUsersEvents = username => dispatch => {
  getGithubUserEvents(username)
  .then(res => res.json())
  .then(events => {
    const forkedRepositories = events.filter(event => event.type === FORK_EVENT);
    const pullRequests = events.filter(event => event.type === PULL_REQUEST_EVENT);
    dispatch(handleForkedRepositories(forkedRepositories))
    dispatch(handlePullRequests(pullRequests))
  })
}

export const handleLogout = () => ({
  type: USER_ACTIONS.LOGOUT
});
