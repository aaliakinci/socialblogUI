import React from 'react';
import './recentPosts.css'
import { useContext, useState, useEffect } from 'react' 
import Card from '../../Card/recentPostsCard'

import BlogContext from '../../../Contexts/BlogContext';

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
                        <a href="javascript">
                        {articles.length && articles.map(article => {
                                            console.log(article)
                                            return <Card key={article._id} id={article._id} title={article.title}  createAt={article.createAt} user={article.user_id} />
                                        })}
                        </a>
                    </li>
                 
                </ul>
            </div>
        </div>
    )
}