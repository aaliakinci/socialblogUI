import React from 'react'
import UserImage1 from '../../assets/images/comment-author-01.jpg'
import UserImage2 from '../../assets/images/comment-author-02.jpg'
export default function Comment() {
    return (
        <li>
            <div className="author-thumb">
                <img src={UserImage2} alt="" />
            </div>
            <div className="right-content">
                <h4>Charles Kate<span>May 16, 2020</span></h4>
                <p>Fusce ornare mollis eros. Duis et diam vitae justo fringilla condimentum eu quis leo.
                Vestibulum id turpis porttitor sapien facilisis scelerisque. Curabitur a nisl eu lacus
                        convallis eleifend posuere id tellus.</p>
            </div>
        </li>
    )
}