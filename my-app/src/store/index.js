//生成store
import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer);

// console.log(store.getState());

export default store;