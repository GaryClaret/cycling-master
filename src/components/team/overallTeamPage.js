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
		var createRiderRow = function(rider) {
			return (
					<div className="row">
					<div className="col-md-1">{rider.surname}</div>
					<div className="col-md-1">{rider.team}</div>
					<div className="col-md-1">{rider.total}</div>
					</div>
				);
		};

		return (
			<div>
				<h1>This is the Overall Team Page</h1>
				<h2>Team Name: {this.state.team.teamName}</h2>
				<div className="container">
					<div>
						{this.state.team.riderData.map(createRiderRow, this)}
					</div>
					
				</div>
			</div>
			)
	}
});

module.exports = OverallTeamPage;