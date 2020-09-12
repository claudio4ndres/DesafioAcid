import { combineReducers } from 'redux';

const reducers = combineReducers({
    // 
});

const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_STORE') {
      state = undefined
    }
    return reducers(state, action)
  }
  
export default rootReducer;