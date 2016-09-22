"use strict"

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var FilmStore = require('../../stores/filmStore');
var FilmList = require('./movieList');
var FilmActions = require('../../actions/filmActions');
var AppDispatcher = require('../../dispatcher/appDispatcher');

function getFilms() {
	var films = FilmStore.getState();
		if (films.length == 0) {
				return null;
			} else {
				return films;
			}
}

var MoviePage = React.createClass({

	getInitialState: function() {
		return  {
			films: getFilms()
		};
	},

	componentDidMount: function() {
		FilmStore.addChangeListener(this._onChange);
		FilmActions.receiveFilms();
	},

	componentWillUnmount: function() {
        FilmStore.removeChangeListener(this._onChange);
    },

	_onChange: function() {
		this.setState(FilmStore.getState());
	},

	render: function() {
		return (
			<div>
				<h1>Films on today</h1>
				<FilmList films={FilmStore.getState()} />
			</div>
		);
	}
});

module.exports = MoviePage;