import React from 'react';
import './categories.css'

export default function SidebarCategories() {
    return (
        <div className="sidebar-item categories">
            <div className="sidebar-heading">
                <h2>
                    Categories
                </h2>
            </div>
            <div className="content">
                <ul>
                    <li><a href="javascript">- Nature Lifestyle</a></li>
                    <li><a href="javascript">- Awesome Layouts</a></li>
                    <li><a href="javascript">- Creative Ideas</a></li>
                    <li><a href="javascript">- Responsive Templates</a></li>
                    <li><a href="javascript">- HTML5 / CSS3 Templates</a></li>
                    <li><a href="javascript">- Creative &amp; Unique</a></li>
                </ul>
            </div>
        </div>
    )
}