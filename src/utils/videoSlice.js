import {createSlice} from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videos",
    initialState:{
        videos:null,
        filteredVideos:null,
        categories:null
    },
    reducers:{
        addVideos: (state,action)=>{
            state.videos = action.payload;
            state.filteredVideos = action.payload;
        },
        addCategories: (state,action)=>{
            state.categories = action.payload;
        },
        filterVideosByCategory:(state,action)=>{
            if(action.payload === null){
                state.filteredVideos = state.videos;
                return;
            }
            state.filteredVideos = state.videos?.filter(video => video.snippet.categoryId === action.payload);
        }
    }
})

export const {addVideos, addCategories, filterVideosByCategory} = videoSlice.actions;
export default videoSlice.reducer;