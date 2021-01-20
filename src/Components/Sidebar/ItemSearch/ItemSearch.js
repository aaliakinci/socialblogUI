import React from 'react'

export default function ItemSearch() {
    return (
        <div className="sidebar-item search">
            <form id="search_form" name="gs" method="GET" action="#">
                <input type="text" name="q" className="searchText" placeholder="type to search..." autocomplete="on" />
            </form>
        </div>
    )
}