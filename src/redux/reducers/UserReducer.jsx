import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../api/apisearch";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
    },
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
   console.log(action.payload);            
            return {
                ...state,
                user:action.payload,
            }
        },
    }
})
export default userSlice.reducer;