var Dispatcher = require('./appDispatcher');
var assign = require('object-assign');

var AppDispatcher = assign({}, Dispatcher.prototype, {

  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
  handleRequestAction: function(action) {
    this.dispatch({
      source: 'GET_FILMS',
      action: action
    });
  }

});

module.exports = AppDispatcher;