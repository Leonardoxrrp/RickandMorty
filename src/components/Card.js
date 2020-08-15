import React, { Component } from 'react'
import "../styles/card.css"

class Card extends Component {
    state = {
        character: []  
    }
    componentDidMount () {
        this.fetchCharacter()
    }
    fetchCharacter = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await response.json()

        this.setState({
            character: data.results
        })
    }

    render() {
        return (
            <React.Fragment>
            <h1>Card page</h1>
        {this.state.character.map(character => <h1>{character.name}</h1>)}
             </React.Fragment>
                
        )
    }
}

export default Card;