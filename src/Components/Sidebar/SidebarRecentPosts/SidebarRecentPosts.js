import React from 'react';

export default function SidebarRecentPosts() {
    return (
        <div className="sidebar-item recent-posts">
            <div className="sidebar-heading">
                <h2>Recent Posts</h2>
            </div>

            <div className="content">
                <ul>
                    <li>
                        <a href="javascript">
                            <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                            <span>May 31, 2020</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript">
                            <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                            <span>May 31, 2020</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript">
                            <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                            <span>May 31, 2020</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}