import React from 'react'
import ItemSearch from './ItemSearch'
import SidebarRecentPosts from './SidebarRecentPosts'
import SidebarCategories from './SidebarCategories'
import SidebarTags from './SidebarTags'
import './sidebar.css'

export default function Sidebar() {
    return (
<<<<<<< HEAD
        <div className="sidebar">
=======
        <div className="sidebar mt-4 mt-lg-0">
>>>>>>> main
            <div className="row">
                <div className="col-lg-12">
                    <ItemSearch />
                </div>
                <div className="col-lg-12">
                    <SidebarRecentPosts />
                </div>
                <div className="col-lg-12">
<<<<<<< HEAD
                    <SidebarCategories />
                </div>
                <div className="col-lg-12">
=======
>>>>>>> main
                    <SidebarTags />
                </div>
            </div>
        </div>
    )
}