import Head from 'next/head';
import '../styles/globals.css';

// reducers
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import user from '../reducers/user';
// import bookmarks from '../reducers/bookmarks';
// import hiddenArticles from '../reducers/hiddenArticles';

// persistGate
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({user});
const persistConfig = {key: 'applicationName', storage};

const store = configureStore({
	reducer: persistReducer(persistConfig, reducers),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);

function App({Component, pageProps}) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Head>
					<title>Next.js App</title>
				</Head>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

export default App;
