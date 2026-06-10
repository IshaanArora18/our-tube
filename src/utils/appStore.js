import {configureStore} from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import sidebarReducer from "./sidebarSlice";
const store = configureStore({
    reducer: {
        videos:videoReducer,
        sidebar:sidebarReducer
    }
});

export default store;