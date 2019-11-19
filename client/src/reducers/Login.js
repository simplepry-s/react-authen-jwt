import { INCREMENT_TEST } from "../actions/login";

let intialState = { count: 0 };

export default (state = intialState, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT_TEST:
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }
};
