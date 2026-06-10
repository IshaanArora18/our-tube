import React from 'react'
import { useSelector } from 'react-redux';
import { filterVideosByCategory } from './utils/videoSlice';
import { useDispatch } from 'react-redux';

const ButtonList = () => {

    const videoCategories = useSelector((store) => store.videos.categories);
    const dispatch = useDispatch();
    const handleCategoryClick = (categoryId) => {
        dispatch(filterVideosByCategory(categoryId));
    }
    return (
        <div>
            <ul className="flex overflow-x-auto">
                <li><button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full m-2" onClick={() => handleCategoryClick(null)}>All</button></li>
                {videoCategories?.map((category) => (
                    <li key={category.id}><button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full m-2" onClick={() => handleCategoryClick(category.id)}>
                        {category.title}
                    </button></li>
                ))}
            </ul>
        </div>
    )
}

export default ButtonList