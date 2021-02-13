import React from 'react';
import './recentPosts.css';
import { useContext } from 'react';
import RecentPostCard from './RecentPostCard';

import BlogContext from '../../../Contexts/BlogContext/BlogContext';

export default function SidebarRecentPosts() {
    const { articles } = useContext(BlogContext);
    console.log(articles)
    return (
        <div className="sidebar-item recent-posts">
            <div className="sidebar-heading">
                <h2>Son Gönderiler</h2>
            </div>
            <div className="content">
                <ul>
                    <li>
                        {articles.length &&
                            articles.slice(0, 5).map((article) => {
                                return (
                                    <RecentPostCard
                                        key={article._id}
                                        id={article._id}
                                        description={article.description}
                                        title={article.title}
                                        createAt={article.createAt}
                                        user={article.user_id}
                                    />
                                );
                            })}
                    </li>
                </ul>
            </div>
        </div>
    );
}
