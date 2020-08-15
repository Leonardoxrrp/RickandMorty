import React, { Component } from 'react'
import "../styles/card.css"

class Card extends Component {
    state = {
        loading: true,
        character: []  
    }
    componentDidMount () {
        this.fetchCharacter()
    }
    fetchCharacter = async () => {
        this.setState({loading: false})
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await response.json()

        this.setState({
            character: data.results
        })
    }

    render() {
        return (

            <React.Fragment>
            {this.state.loading && ( <h1>LOADING</h1>)}
            <h1>Card page</h1>
        {this.state.character.map(character => 
        
        <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="card">
                <img className="card-img-top" src={character.image} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{character.name}</h4>
                        <p className="card-text">{character.species}.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )}
             </React.Fragment>  
        )
    }
}

export default Card;