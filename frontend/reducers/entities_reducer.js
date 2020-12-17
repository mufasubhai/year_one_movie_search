import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer.js';


const entitiesReducer = combineReducers({
    movies: moviesReducer
});

export default entitiesReducer;