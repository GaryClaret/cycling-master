"use strict"

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var CyclingStore = require('../../stores/cyclingTeamStore');
var CyclingTeamList = require('./cyclingTeamList');
var CyclingTeamActions = require('../../actions/cyclingTeamActions');
var AppDispatcher = require('../../dispatcher/appDispatcher');

function getRiders() {
	var riders = CyclingStore.getState();
		if (riders.length == 0) {
				return null;
			} else {
				return riders;
			}
}

var CyclingTeamPage = React.createClass({
	getInitialState: function() {
		return  {
			riders: getRiders()
		};
	},

	componentDidMount: function() {
		CyclingStore.addChangeListener(this._onChange);
		CyclingTeamActions.receiveFilms();
	},

	componentWillUnmount: function() {
      CyclingStore.removeChangeListener(this._onChange);
    },

	_onChange: function() {
		this.setState(CyclingStore.getState());
	},

	render: function() {
		return (
			<div>
				<h1>All the riders</h1>
				<CyclingTeamList riders={CyclingStore.getState()} />
			</div>
		);
	}
});

module.exports = CyclingTeamPage;
