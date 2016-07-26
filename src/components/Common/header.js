"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
			<nav className="container-fluid">
				<div className="container-fluid">
					<Link to="app" className="navbar-brand">
						<img src="images/pluralsight-logo.png" />
					</Link>
					<ul className="nav navbar-nav">
						<li><Link to="app">Home</Link></li>
						<li><Link to="authors">Authors</Link></li>
						<li><Link to="about">About</Link></li>
						<li><Link to="overallTeam">Overall Team</Link></li>
						<li><Link to="teamBreakdown">Team Breakdown</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header; 