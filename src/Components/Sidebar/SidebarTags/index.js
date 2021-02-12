import React from 'react';
import './sidebarTags.css'
import { Link } from 'react-router-dom';

export default function SidebarTags() {
    return (
        <div className="sidebar-item tags">
            <div className="sidebar-heading">
                <h2>Tag Clouds</h2>
            </div>
            <div className="content">
                <ul>
                    <li><Link to="javascript">Lifestyle</Link></li>
                    <li><Link to="javascript">Creative</Link></li>
                    <li><Link to="javascript">Motivation</Link></li>
                    <li><Link to="javascript">Technology</Link></li >
                    <li><Link to="javascript">Javascript</Link></li >
                    <li><Link to="javascript">React</Link></li >
                </ul >
            </div >
        </div >
    )
}