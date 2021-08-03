import { applyMiddleware,createStore } from 'redux'
import rootReducer from './RootReducer';
import ThunkMiddleware  from 'redux-thunk';

const store =createStore(rootReducer,applyMiddleware(ThunkMiddleware))


export default  store;