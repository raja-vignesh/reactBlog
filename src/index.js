import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import RootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import {getFirebase,reactReduxFirebase} from 'react-redux-firebase';
import {getFirestore,reduxFirestore} from 'redux-firestore';
import firebaseConfig from './config/firebaseConfig';
import {Provider} from 'react-redux';

const store = createStore(RootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
reactReduxFirebase(firebaseConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true }),reduxFirestore(firebaseConfig)))




store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
});
