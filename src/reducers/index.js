import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';
import charactersReducer from './characters_reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  characters: charactersReducer
})

export default rootReducer;