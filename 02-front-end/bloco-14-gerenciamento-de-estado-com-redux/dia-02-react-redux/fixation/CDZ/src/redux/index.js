import { legacy_createStore as createStore } from 'redux';
import defeatSaga from './reducers/cosmoReducer';

const store = createStore(defeatSaga);
export default store;
