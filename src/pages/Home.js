import React, { Component } from 'react'
import wallpaperdesktop from "../images/wallpaperdesktop.jpg"
import wallpaperphone from "../images/wallpaperphone.png"
import "../styles/home.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                <img src={wallpaperphone} className="wallpaperphone"/>
                <img src={wallpaperdesktop} className="wallpaperdesktop"/>
                <button type="button" className="btn btn-danger btn-lg">Press me</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;