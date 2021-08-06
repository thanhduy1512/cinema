import { applyMiddleware, combineReducers, createStore } from 'redux';
import GetMovieReducer from './reducers/GetMovieReducer';
import reduxThunk from 'redux-thunk';
import GetUserReducer from './reducers/GetUserReducer';


const RootReducer = combineReducers({
    //khai bao reducer
    GetMovieReducer,
    GetUserReducer
})

const store = createStore(RootReducer, applyMiddleware(reduxThunk));

export default store;