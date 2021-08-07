import React from 'react'
import MainPost from './MainPost'
import SidePost from './SidePost'

const SinglePostContainer = () => {
    return (
        <div className="py-5 row">
            <MainPost/>
            <SidePost/>
            
        </div>
    )
}

export default SinglePostContainer
