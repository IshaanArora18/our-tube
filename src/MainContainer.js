import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { GET_VIDEOS_URL, GET_VIDEO_CATEGORY_URL } from './utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addVideos, addCategories } from './utils/videoSlice'

const MainContainer = () => {

    const dispatch = useDispatch();
    const videos = useSelector((store)=>store.videos.videos);
    const categories = useSelector((store)=>store.videos.categories);
    const isSideBarOpen = useSelector((store) => store.sidebar.isOpen);

    useEffect(() => { 
        const fetchData = async()=>{
           const videosData = await fetch(`${GET_VIDEOS_URL}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
           const videosJson = await videosData.json();
           dispatch(addVideos(videosJson.items))
           const videoCategories = new Set();
           const videoCategoryIds = new Set();
           await Promise.all(
            videosJson.items.map(async (video) => {
                const videoCategoryId = video.snippet.categoryId;
                const categoryData = await fetch(`${GET_VIDEO_CATEGORY_URL}${videoCategoryId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
                const categoryJson = await categoryData.json();
                videoCategories.add(categoryJson.items[0].snippet.title);
                videoCategoryIds.add(videoCategoryId);
            })
           );
           const uniqueCategoriesArray = Array.from(videoCategories);
           const uniqueCategoryIdsArray = Array.from(videoCategoryIds);
           const uniqueCategories = uniqueCategoryIdsArray.map((id, index) => ({
               id,
               title: uniqueCategoriesArray[index]
           }));
           dispatch(addCategories(uniqueCategories));
        }
        fetchData();
    }, []);
    return videos && categories ? (
        <div className="grid grid-flow-col">
            <div className="col-span-1">
                {isSideBarOpen && <Sidebar />}
            </div>
            <div className="col-span-11">
                <ButtonList />
                <VideoContainer />
            </div>
        </div>
    ) : null;
}

export default MainContainer