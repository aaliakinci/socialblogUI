import React from 'react';
import './recentPosts.css'
import { useContext, useState, useEffect } from 'react'
import RecentPostCard from '../../Card/recentPostsCard'
import { Link } from 'react-router-dom'

import BlogContext from '../../../Contexts/BlogContext/BlogContext';

export default function SidebarRecentPosts() {

    const { articles } = useContext(BlogContext);
    console.log(articles)
    return (
        <div className="sidebar-item recent-posts">
            <div className="sidebar-heading">
                <h2>Recent Posts</h2>
            </div>

            <div className="content">
                <ul>
                    <li>
                        <Link to="javascript">
                            {articles.length && articles.map(article => {
                                return <RecentPostCard key={article._id} id={article._id} title={article.title} createAt={article.createAt} user={article.user_id} />
                            })}
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}