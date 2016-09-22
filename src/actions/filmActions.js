"use strict";

var Dispatcher = require('../dispatcher/Dispatcher');
var FilmApi = require('../api/filmapi');
var ActionTypes = require('../constants/actionTypes');

var FilmActions = {
	receiveFilms: function() {
		Dispatcher.handleRequestAction({
			actionType: "GET_FILMS",
		});

		FilmApi.getAllFilms();
	}
};

module.exports = FilmActions;