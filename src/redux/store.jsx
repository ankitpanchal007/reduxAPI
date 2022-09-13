import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
import PostReducer from "./reducers/reducer";


export default configureStore({
    reducer: {
        post: PostReducer,
        user: UserReducer
    },
});


