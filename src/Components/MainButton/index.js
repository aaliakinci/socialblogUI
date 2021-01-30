import React from 'react'
import './mainbutton.css'

function MainButton() {
    return (
        <div className="main-button" >
            <a href="javascript">
                {/* Dinamik hale getirilecek */}
                View all posts
            </a>
        </div >
    )
}
export default MainButton;