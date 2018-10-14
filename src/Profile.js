import React from "react";
import Button from "./Button.js";
import ReposList from "./ReposList.js";

export default ({ login, avatar_url, handleLogOut, events, name }) => (
  <div className="profile">
    <h2 className="user-name">Hello {name}!</h2>
    <div className="user-avatar">
    <img src={avatar_url} alt={`${name}'s avatar`} />
    </div>
    <ReposList events={events} />
    <Button value="Log Out" handleClick={handleLogOut} />
    </div>
);
