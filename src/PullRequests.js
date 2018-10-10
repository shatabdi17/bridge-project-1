import React from "react";

export default ({ events }) => {
	return (
		<div className="pull-requests">
			<h2>Pull Request Events</h2>
				{events.map((event, i) => {
					if (event.type === "PullRequestEvent") {
						return <div key={`pullRequest-${i}`}>
									<p>{event.status} PullRequest</p>
									{event.status === "open" ? <p class="open-pull-request" key={`pullRequestStatus-${i}`}>{event.status}</p> : <p class="closed-pull-request" key={`pullRequestStatus-${i}`}>{event.status}</p>}
									<p key={`pullRequestEvent-${i}`}>Repo name:{event.repo.name}</p>									
									<p key={`pullRequestEventURL-${i}`}><a href={event.html_url}>Pull Request URL</a></p>	
									<p key={`pullRequestTitle-${i}`}>{event.title}</p>				
							</div>
					} else {
						return null;
					}
				})}
		</div>
	)
}