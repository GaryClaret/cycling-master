"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var RiderList = React.createClass({
	propTypes: {
		riders: React.PropTypes.array.IsRequired
	},

	render: function() {
		var createRiderRow = function(rider) {
			return (
				<tr key={rider.firstname}>
					<td>{rider.surname}</td>
				</tr>
			);
		};

		if (!this.props.riders) {
			return (
				<div>NO RIDERS</div>
				);
		}

			return (
					<div>
						<table className="table">
							<thead>
								<th>FirstName</th>
								<th>Surname</th>
							</thead>
							<tbody>
								{this.props.riders.map(createRiderRow, this)}
							</tbody>
						</table>
					</div>
				);
	}
});

module.exports = RiderList;
