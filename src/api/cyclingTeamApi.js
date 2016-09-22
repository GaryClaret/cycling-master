var request = require('superagent');
var API_URL = "/api/v2";
var TIMEOUT = 10000;
var AppDispatcher = require('../dispatcher/dispatcher');
var Actions = require('../actions/cyclingTeamActions')

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
	getAllCyclingRiders: function() {
		var url = 'http://ec2-54-70-73-62.us-west-2.compute.amazonaws.com/CyclingService.svc/GetAllRiders';
		var key = "GET_CYCLING_RIDERS";
		var params = {};
		abortPendingRequests(key);

		dispatch(key, "PENDING", params);
		_pendingRequests[key] = get(url).end(
            handleResponse(key, params)
        );
	}
};

module.exports = Api;
