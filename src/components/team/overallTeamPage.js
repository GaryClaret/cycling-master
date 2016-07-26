"use strict";

var React = require('react');
var TeamStore = require('../../stores/teamStore');

var OverallTeamPage = React.createClass({
	getInitialState: function() {
		return {
			team: TeamStore.getTeamById(1)
		};
	},

	render: function() {
		var team = this.state.team;

		return (
			<div>
				<h1>This is the Overall Team Page</h1>
				<h2>{this.state.team.teamName}</h2>
			</div>
			)
	}
});

module.exports = OverallTeamPage;