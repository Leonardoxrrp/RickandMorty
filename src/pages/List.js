import React, { Component } from 'react'
import "spinkit/spinkit.min.css"

class List extends Component {
    state = {
        loading: true,
        character: []
    }
    componentDidMount() {
        this.fetchCharacter()
    }
    fetchCharacter = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await response.json()

        this.setState({
            character: data.results,
            loading: true
        })
    }

    render() {
        return (

            <React.Fragment>
                <h1>List page</h1>

                {/* <div className="container">
                    <div className="row">
                        {this.state.character.map(character =>
                            <div className="card col-3">
                                <img className="card-img-top" src={character.image} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">{character.name}</h4>
                                    <p className="card-text">{character.species}.</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div> */}
                {this.state.loading && (

                    <div class="sk-swing">
                        <div class="sk-swing-dot"></div>
                        <div class="sk-swing-dot"></div>
                    </div>
                )}

            </React.Fragment>
        )
    }
}

export default List;