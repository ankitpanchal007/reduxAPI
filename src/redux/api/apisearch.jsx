
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getUser = createAsyncThunk("user/getUser", async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
        return res.json()
    });
    return response;
})
