import React from "react";


export default ({ events }) => {
	return (
		<div className="forks-container">
			<h2>Forked Repos</h2>
			<ul className="forked-repolist">
			{events.map((event, i) => {
				if (event.type === "ForkEvent") {
					return <li key={`fork-${i}`}>					
                            {/* <p key={`forkEvent-${i}`}> Repo name :<a href={event.payload.forkee.html_url}> {event.repo.name}</a></p> */}
							<p key={`forkEvent-${i}`}>
							<a className="bold" href={event.payload.forkee.html_url}>Repo</a></p>	
						    <p key={`forkEventURL-${i}`}><a href={event.repo.url}>{event.repo.name}</a></p>
						
						</li>
				} else {
					return null;
				}
			})}
			</ul>
		</div>
	)
}