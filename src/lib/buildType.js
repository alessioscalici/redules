
module.exports = (...actions) => actions.reduce((acc, action) => {
  acc.actionTypes[action.id] = action.type;
  acc.actionCreators[action.id] = action.creator;
  acc.actionHandlers[action.type] = action.handler;
  return acc;
}, {
  actionHandlers: {},
  actionCreators: {},
  actionTypes: {},
});