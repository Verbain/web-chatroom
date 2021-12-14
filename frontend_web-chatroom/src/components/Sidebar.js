import './Sidebar.css'
import { React, useEffect, useState} from 'react';
import { onSnapshot, collection, doc } from '@firebase/firestore';
import db from "../firebase";


function Sidebar() {

    const joinRoom1 = () => {
        localStorage.setItem("roomId", "Room1")
        const roomId = localStorage.getItem("roomId")
        window.location = (`/${roomId}`)
    }
    const joinRoom2 = () => {
        localStorage.setItem("roomId", "Room2")
        const roomId = localStorage.getItem("roomId")
        window.location = (`/${roomId}`)
    }
    const joinRoom3 = () => {
        localStorage.setItem("roomId", "Room3")
        const roomId = localStorage.getItem("roomId")
        window.location = (`/${roomId}`)
    }
    const joinRoom4 = () => {
        localStorage.setItem("roomId", "Room4")
        const roomId = localStorage.getItem("roomId")
        window.location = (`/${roomId}`)
    }


    return (
        <nav id = "sidebar">
            <div className="sidebar-div">
                <strong>Choose your Room</strong>
            </div>
            <ul className = "sidebar-ul">
                <li className = "sidebar-li">
                    <button onClick={joinRoom1}>Room 1</button>
                </li>
                <li className = "sidebar-li ">
                    <button onClick={joinRoom2}>Room 2</button>
                </li>
                <li className = "sidebar-li">
                    <button onClick={joinRoom3}>Room 3</button>
                </li>
                <li className = "sidebar-li">
                    <button onClick={joinRoom4}>Room 4</button>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
