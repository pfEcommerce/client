import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from '../reducers';
import thunk from 'redux-thunk';

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

const presistedState = loadFromLocalStorage();
const store = createStore(
    reducer,
    presistedState,
    composeWithDevTools(applyMiddleware(thunk)),
);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;