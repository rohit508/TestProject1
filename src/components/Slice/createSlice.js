import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    loader:false,
    Inputsearch:'',
    Ismodalshowhide:false,
    userdetails:{},
};

export const UsersList = createSlice({
    name: 'UsersList',
    initialState,
    reducers: {
    setusers: (state, action) => {
            debugger;
            state.value = action.payload
    },
    setloader: (state, action) => {
        debugger;
        state.loader = action.payload
},
    setinputsearch: (state, action) => {
            debugger;
            state.Inputsearch = action.payload
    },
    setmodalshowhide: (state, action) => {
            debugger;
            state.Ismodalshowhide = action.payload
    },
    setuserdetails: (state, action) => {
            debugger;
            state.userdetails = action.payload
    },
   
    },
});
export const { setusers,setloader, setinputsearch ,setmodalshowhide,setuserdetails} = UsersList.actions;
export default UsersList.reducer;
