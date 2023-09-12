
// 'use client'
import {configureStore} from '@reduxjs/toolkit';
import profileReducer from '@redux/reducers';
export default configureStore({
    reducer:{
        profile: profileReducer
    }
})