import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


export default function configureStore() {
  const loggerMiddleware = createLogger();
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));
}
