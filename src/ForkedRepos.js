import React from "react";
import { connect } from "react-redux";

const ForkedRepos = ({ repos }) => {
	return (
		<div className="forks-container">
			<h2>Forked Repos</h2>
			<ul className="forked-repolist">
				{repos.map((repo, i) =>
					<li key={`fork-${i}`}>					
						<p key={`forkEvent-${i}`}>
						<a className="bold" href={repo.payload.forkee.html_url}>Repo</a></p>	
						<p key={`forkEventURL-${i}`}><a href={repo.repo.url}>{repo.repo.name}</a></p>
					</li>
				)}
			</ul>
		</div>
	)
}

const mapStateToProps = state => ({
	repos: state.repos,
})

export default connect(mapStateToProps)(ForkedRepos);