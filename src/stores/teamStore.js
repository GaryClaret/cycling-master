"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var _teams = require('../api/teamData').teamData;

var CHANGE_EVENT = 'change';

var TeamStore = assign([], EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllTeamData: function() {
		return _team;
	},

	getTeamById: function(id) {
		return _.find(_teams, {id: id});
	}
});

module.exports = TeamStore;