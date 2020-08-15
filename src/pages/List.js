import React, { Component } from 'react'
import Card from "../components/Card"

class List extends Component {
    render() {
        return (
            <div className="List-container">
                {/* I would like to have a transition before getting to this page. */}
                <Card />
            </div>
        )
    }
}
export default List;