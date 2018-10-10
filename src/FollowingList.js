import React from "react";

export default ({ followers }) => (
  <div className="followers-container">
    <h2>Followers</h2>
    <ul className="followers-list">
      {followers.length > 0 ? followers.map((follower, i) => (
        <li key={`follower-${i}`}>
        <a href={follower.html_url}>
          <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} />
          <p className="bold">{follower.login}</p>
        </a>
        </li>
      )) : <p> No followers yet!</p>}
    </ul>
  </div>
);
