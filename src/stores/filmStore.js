"use strict"

var Dispatcher = require('../dispatcher/dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('superagent');
var _ = require('lodash');
var Actions = require('../actions/filmActions');

var _films = [];

var CHANGE_EVENT = 'change';

function getFilms(response) {
	if (!!response && response !== "PENDING") {
		_films = response.body;
	}
}

var FilmStore = assign({}, EventEmitter.prototype, {
	getState: function() {
        return _films;
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
FilmStore.appDispatch = Dispatcher.register(function(action) {
	switch(action.source) {
		case ActionTypes.GET_FILMS:
			getFilms(action.action.response);
			break;
			default:
				return true;
	}

	FilmStore.emitChange();
	return true;
});

module.exports = FilmStore;