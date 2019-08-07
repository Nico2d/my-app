

let defaultState={
    id: 2,
    size: 2,
    defaultBranch: 2,
    stargazersCount: 2,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'SET':
        return {
          ...state, 
          id: action.id +1,
          size: action.size+1,
          defaultBranch: action.myJson.defaultBranch +1,
          stargazersCount: action.myJson.stargazersCount
        }
      default:
        return state
    }
  }

export default reducer