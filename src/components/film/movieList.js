"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var MovieList = React.createClass({
	propTypes: {
		films: React.PropTypes.array.IsRequired
	},

	render: function() {
		var createFilmRow = function(film) {
			return (
				<tr key={film.title}>
					<td>{film.title}</td>
					<td>{film.directors}</td>
					<td>{film.longDescription}</td>
				</tr>
			);
		};

		if (!this.props.films) {
			return (
				<div>NO FILMS</div>
				);
		}

			return (
					<div>
						<table className="table">
							<thead>
								<th>Title</th>
								<th>Director</th>
								<th>What is it about</th>
							</thead>
							<tbody>
								{this.props.films.map(createFilmRow, this)}
							</tbody>
						</table>
					</div>
				);
	}
});

module.exports = MovieList;