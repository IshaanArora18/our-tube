import React from 'react'

const Sidebar = () => {
    return (<div className="w-48 p-4 shadow-lg">
        <ul className="flex flex-col">
            <li className="p-2 hover:bg-gray-200">Home</li>
            <li className="p-2 hover:bg-gray-200">Trending</li>
            <li className="p-2 hover:bg-gray-200">Subscriptions</li>
        </ul>
    </div>)

}

export default Sidebar