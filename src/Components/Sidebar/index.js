import React from 'react'
import ItemSearch from './ItemSearch'
import SidebarRecentPosts from './SidebarRecentPosts'
import SidebarTags from './SidebarTags'
import './sidebar.css'

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
                    <SidebarTags />
                </div>
            </div>
        </div >
    )
}