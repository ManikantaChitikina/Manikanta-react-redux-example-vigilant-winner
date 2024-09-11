// import {legacy_createStote} from'redux'
// import {createStore} from'redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
//import productreducer from './ProductReducer'
import { batreducer,padreducer } from './ProductReducer';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import Reducer from '../img/Reducer'
const rootreducer=combineReducers({bat:batreducer,pad:padreducer,imglist:Reducer})
const store = configureStore({
    reducer: rootreducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: true, // Ensure thunk is included (default behavior
    }).concat(logger),
  });
export default store