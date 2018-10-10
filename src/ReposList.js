import React from "react";
import ForkedRepos from "./ForkedRepos";
import PullRequests from "./PullRequests";

export default ({ events }) => (
	<React.Fragment>	
		<ForkedRepos events={events} />	
		<PullRequests events={events} />
	</React.Fragment>
);