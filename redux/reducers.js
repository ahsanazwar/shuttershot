import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const basicRoute = 'https://jsonplaceholder.typicode.com' || 'localhost:3000';


const instance = axios.create({
    baseURL: basicRoute,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});


export const dataFetch = createAsyncThunk("dataFetch", async () =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response
    }catch(err){
        return err;
    }
    // await instance.get('/posts', payload).then((res)=>{
    //     return res.data;
    // }).catch((error)=>{
    //     console.log(error);
    // })
})

export const userFetch = createAsyncThunk("userFetch", async () =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        return response
    }catch(err){
        return err;
    }
    // await instance.get('/posts', payload).then((res)=>{
    //     return res.data;
    // }).catch((error)=>{
    //     console.log(error);
    // })
})


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
        
    },
    extraReducers: (builder) =>{
        builder.addCase(dataFetch.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(dataFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(dataFetch.rejected, (state, action) => {
            console.log(action.payload);
            state.isError = true
        });
    }, 
    extraReducers: (builder) =>{
        builder.addCase(userFetch.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(userFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(userFetch.rejected, (state, action) => {
            console.log(action.payload);
            state.isError = true
        });
    },       
})

// export const {SET_NAME} = profileSlice.actions;
export default profileSlice.reducer;