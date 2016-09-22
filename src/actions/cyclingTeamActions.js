"use strict";

var Dispatcher = require('../dispatcher/Dispatcher');
var CyclingTeamApi = require('../api/cyclingTeamApi');
var ActionTypes = require('../constants/actionTypes');

var CyclingActions = {
	receiveFilms: function() {
		Dispatcher.handleRequestAction({
			actionType: "GET_CYCLING_RIDERS",
		});

		CyclingTeamApi.getAllCyclingRiders();
	}
};

module.exports = CyclingActions;
