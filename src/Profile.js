import React from "react";
import FollowingList from "./FollowingList.js";
import Button from "./Button.js";
import ReposList from "./ReposList.js";

export default ({ login, avatar_url, handleLogOut, followers, events, name }) => (
  <div className="profile">
    <h2>Hello {name}!</h2>
    <div className="user-avatar">
    <img src={avatar_url} alt={`${name}'s avatar`} />
    </div>
    <FollowingList followers={followers} />
    <ReposList events={events} />
    <Button value="Log Out" handleClick={handleLogOut} />
    </div>
);
