import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../api/api";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        [getPosts.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        },
        [getPosts.rejected]: (state) => {
            return {
                ...state,
                loading: false,
            }
        },
    }
})
export default postSlice.reducer;