import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { chatReducer } from 'redux/slices/chat';

/* -------------------------------------------------------------------------- */

const rootReducer = combineReducers({
  chat: chatReducer,
});

const persistConfig = {
  storage,
  key: 'root',
  whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
