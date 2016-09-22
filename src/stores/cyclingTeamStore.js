"use strict"

var Dispatcher = require('../dispatcher/dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('superagent');
var _ = require('lodash');
var Actions = require('../actions/cyclingTeamActions');

var _riders = [];

var CHANGE_EVENT = 'change';

function getRiders(response) {
	if (!!response && response !== "PENDING") {
		_riders = response.body;
	}
}

var CyclingTeamStore = assign({}, EventEmitter.prototype, {
	getState: function() {
        return _riders;
    },

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	}
});
CyclingTeamStore.appDispatch = Dispatcher.register(function(action) {
	switch(action.source) {
		case ActionTypes.GET_RIDERS:
			getRiders(action.action.response);
			break;
			default:
				return true;
	}

	CyclingTeamStore.emitChange();
	return true;
});

module.exports = CyclingTeamStore;
