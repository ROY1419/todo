import { legacy_createStore as createStore} from 'redux'
import todoReducer from './reduceres';

const store = createStore(todoReducer);

export default store;