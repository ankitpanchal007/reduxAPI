
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json());
    return resp;
})
