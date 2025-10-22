import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import themeReducer from './reducers/theme';

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk) as any);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
