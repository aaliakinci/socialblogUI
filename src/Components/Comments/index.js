import React from 'react'
import Comment from '../Comment'
import './comments.css'

export default function Comments() {
    return (
        <div className="sidebar-item comments">
            <div className="sidebar-heading">
                <h2>4 Commments</h2>
            </div>
            <div className="content">
                <ul>
                    <Comment />
                    <Comment />
                    <Comment />
                </ul>
            </div>
        </div>
    )
}