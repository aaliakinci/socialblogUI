import React from 'react'
import './itemSearch.css'

export default function ItemSearch() {
    return (
        <div className="sidebar-item search">
            <form id="search_form" name="gs" method="GET" action="#">
                <input type="text" name="q" className="searchText" placeholder="type to search..." autoComplete="on" />
            </form>
        </div>
    )
}