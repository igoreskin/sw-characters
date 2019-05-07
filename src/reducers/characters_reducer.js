function charactersReducer(state = { loading: false, characters: [] }, action) {
  switch (action.type) {
    case 'LOADING_CHARACTERS':
      return { ...state, loading: true }
    case 'LOAD_CHARACTERS':
      console.log(action.payload);
      return { loading: false, characters: action.payload }

    default:
      return state;
  }
}

export default charactersReducer;