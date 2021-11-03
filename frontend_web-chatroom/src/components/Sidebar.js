import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <nav id = "sidebar">
            <div className="sidebar-div">
                USER INFO
            </div>
            <ul className = "sidebar-ul">
                <li className = "sidebar-li">
                    <a>Room 1</a>
                </li>
                <li className = "sidebar-li ">
                    <a>Room 2</a>
                </li>
                <li className = "sidebar-li">
                    <a>Room 3</a>
                </li>
                <li className = "sidebar-li">
                    <a>Room 4</a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
