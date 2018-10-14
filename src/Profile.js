import React from "react";
import Button from "./Button.js";
import ForkedRepos from "./ForkedRepos";
import PullRequests from "./PullRequests";

export default ({ login, avatar_url, handleLogOut, name }) => (
  <div className="profile">
    <h2 className="user-name">Hello {name}!</h2>
    <div className="user-avatar">
      <img src={avatar_url} alt={`${name}'s avatar`} />
    </div>
    <ForkedRepos />	
		<PullRequests events={[]} />
    <Button value="Log Out" handleClick={handleLogOut} />
  </div>
);
