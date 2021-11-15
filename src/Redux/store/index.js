import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import cartReducer from '../reducers/cartReducer';

function saveToLocalStorage(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage() {
//localStorage.clear()
const serializedState = localStorage.getItem('state');
if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
}


const reducers = combineReducers({rootReducer,cartReducer})

const presistedState = loadFromLocalStorage();
const store = createStore(
    reducers,
    presistedState,
    composeWithDevTools(applyMiddleware(thunk)),
);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;