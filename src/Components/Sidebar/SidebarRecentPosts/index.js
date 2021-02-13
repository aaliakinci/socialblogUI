import React from 'react';
import './recentPosts.css'
import { useContext} from 'react'
import RecentPostCard from './RecentPostCard'
 

import BlogContext from '../../../Contexts/BlogContext/BlogContext';

export default function SidebarRecentPosts() {

    const { articles } = useContext(BlogContext);
    return (
        <div className="sidebar-item recent-posts">
            <div className="sidebar-heading">
                <h2>Recent Posts</h2>
            </div>

            <div className="content">
                <ul>
                    <li>
                            {articles.length && articles.map(article => {
                                return <RecentPostCard key={article._id} id={article._id} description={article.description} title={article.title} createAt={article.createAt} user={article.user_id} />
                            })}
                    </li>

                </ul>
            </div>
        </div>
    )
}