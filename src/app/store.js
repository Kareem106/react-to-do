import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import itemReducer from "./itemSlice"
import themeReducer from "./themeSlice"
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  items: itemReducer,
  theme:themeReducer
  // other reducers...
});
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)
