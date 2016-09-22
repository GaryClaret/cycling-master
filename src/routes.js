'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var Routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route name="authors" handler={require('./components/authors/authorPage')} />
		<Route name="showtimes" handler={require('./components/film/moviePage')} />
		<Route name="cyclingTeamPage" handler={require('./components/cycling/cyclingTeamPage')} />
		<Route name="teamBreakdown" handler={require('./components/team/teamBreakdownPage')} />
		<Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
		<Route name="about" handler={require('./components/about/aboutPage')} />
		<Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
		<NotFoundRoute handler={require('./components/notFoundPage')} />
		<Redirect from="about-us" to="about" />
		<Redirect from="awthors" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = Routes;
