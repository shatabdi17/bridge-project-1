import React from "react";
import { connect } from "react-redux";

const PullRequests = ({ pullRequests }) => {
	return (
		<div className="pullrequests-container">
			<h2>Pull Request Events</h2>
			{pullRequests.length > 0
			? <ul className="pullrequests-repolist">
				{pullRequests.map((pr, i) => 
					<li key={`pullRequest-${i}`}>
						<p key={`pullRequestEventURL-${i}`}><a className="bold" href={pr.payload.pull_request.html_url}>Pull Request</a></p>	
						<p key={`pullRequestEvent-${i}`}>{pr.repo.name}</p>									
						<p key={`pullRequestTitle-${i}`}>{pr.payload.pull_request.title}</p>				
						{pr.payload.pull_request.state === "open"
							? <p className="open-pull-request" key={`pullRequestStatus-${i}`}>{pr.payload.pull_request.state}</p>
							: <p className="closed-pull-request" key={`pullRequestStatus-${i}`}>{pr.payload.pull_request.state}</p>
						}
					</li>
				)}
			</ul>
			: <p>No PullRequest events!</p>}
		</div>
	)
}

const mapStateToProps = state => ({
	pullRequests: state.pullRequests,
})

export default connect(mapStateToProps)(PullRequests);