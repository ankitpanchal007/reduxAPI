import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./reducer"
export default configureStore({
    reducer: {
        post: PostReducer,
    },
});


