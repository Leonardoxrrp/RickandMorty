import React, { Component } from 'react'
import wallpaperdesktop from "../images/wallpaperdesktop.jpg"
import wallpaperphone from "../images/wallpaperphone.png"
import {Link} from "react-router-dom"
import "../styles/home.css"

class Home extends Component {
    render() {
        return (
                <div className="home-container">
                    <h1 className="title">Rick and Morty</h1>
                    <h5 className="subtitle">Fetch all characters from the series !</h5>
                    <img src={wallpaperphone} className="wallpaperphone" />
                    <img src={wallpaperdesktop} className="wallpaperdesktop" />
                    <Link to="/Name" className="btn btn-success">Let's start</Link>
                </div>
        )
    }
}

export default Home;