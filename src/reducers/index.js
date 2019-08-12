import { GET_GITHUB_INFO_ACTION } from '../types';

const defaultState = {
  
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_GITHUB_INFO_ACTION:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default reducer