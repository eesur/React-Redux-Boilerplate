import data from './reducer-users'
/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" if you want it set so that we don't throw an error when app first boots up or as below pass in the first user
export default function (state = data()[0], action) {
  switch (action.type) {
    case 'USER_SELECTED': {
      return action.payload
    }
    default: {
      break
    }
  }
  return state
}
