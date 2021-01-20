import React from 'react'
import ItemSearch from './ItemSearch/ItemSearch'
import SidebarRecentPosts from './SidebarRecentPosts/SidebarRecentPosts'
import SidebarCategories from './SidebarCategories/SidebarCategories'
import SidebarTags from './SidebarTags/SidebarTags'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="row">
                <div className="col-lg-12">
                    <ItemSearch />
                </div>
                <div className="col-lg-12">
                    <SidebarRecentPosts />
                </div>
                <div className="col-lg-12">
                    <SidebarCategories />
                </div>
                <div className="col-lg-12">
                    <SidebarTags />
                </div>
            </div>
        </div>
    )
}