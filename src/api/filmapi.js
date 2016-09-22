var request = require('superagent');
var API_URL = "/api/v2";
var TIMEOUT = 10000;
var AppDispatcher = require('../dispatcher/dispatcher');
var Actions = require('../actions/filmActions')

var _pendingRequests = {};

function abortPendingRequests(key) {
    if (_pendingRequests[key]) {
        _pendingRequests[key]._callback = function(){};
        _pendingRequests[key].abort();
        _pendingRequests[key] = null;
    }
}

function dispatch(key, response, params) {
    var payload = {actionType: key, response: response};
    if (params) {
        payload.queryParams = params;
    }
    AppDispatcher.handleRequestAction(payload);
}

// return successful response, else return request Constants
function handleResponse(key, params) {
    return function (err, res) {
        if (err && err.timeout === TIMEOUT) {
            dispatch(key, "TIMEOUT", params);
        } else if (res.status === 400) {
        	alert('ERROR');
        } else if (!res.ok) {
            dispatch(key, "ERROR", params);
        } else {
            dispatch(key, res, params);
        }
    };
}

// a get request with an authtoken param
function get(url) {
    return request
        .get(url)
        .timeout(TIMEOUT)
}

var Api = {
	getAllFilms: function() {
		var url = 'http://localhost:4567/CustomerDataWebService.svc/GetFilmShowTimes?dateOfShowings=2016-08-24';
		var key = "GET_ALL_FILMS";
		var params = {};
		abortPendingRequests(key);

		dispatch(key, "PENDING", params);
		_pendingRequests[key] = get(url).end(
            handleResponse(key, params)
        );
	}
};

module.exports = Api;