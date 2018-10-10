import React from "react";

export default ({ events }) => {
	return (
		<div className="pullrequests-container">
			<h2>Pull Request Events</h2>
			{events.length > 0 ?
			<ul className="pullrequests-repolist">
				{events.map((event, i) => {
					if (event.type === "PullRequestEvent") {
						return <li key={`pullRequest-${i}`}>
									<p key={`pullRequestEventURL-${i}`}><a className="bold" href={event.html_url}>Repo</a></p>	
									<p key={`pullRequestEvent-${i}`}>{event.repo.name}</p>									
									<p key={`pullRequestTitle-${i}`}>{event.title}</p>				
									{event.status === "open" ? <p class="open-pull-request" key={`pullRequestStatus-${i}`}>{event.status}</p> : <p class="closed-pull-request" key={`pullRequestStatus-${i}`}>{event.status}</p>}
							</li>
					} else {
						return null;
					}
				})}
			</ul>
			 :<p>No PullRequest events!</p>}
		</div>
	)
}