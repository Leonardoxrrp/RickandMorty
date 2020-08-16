import React, { Component } from 'react'
import Loader from "../components/Loader"
import "../styles/list.css"

class List extends Component {
    state = {
        loading: true,
        character: [],
    }

    componentDidMount() {
        this.fetchCharacter()
    }
    fetchCharacter = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character/")
            const data = await response.json()
            this.setState({
                character: data.results,
                loading: false,
            })

        } catch (error) {
            console.log(error)
            this.setState({loading: false})
        }

    }

    render() {
        return (

            <React.Fragment>
                <div className="navbar"></div>
                <h1>List page</h1>

                <div className="container">
                    <div className="row">
                        {this.state.character.map(character =>
                            <div className="card col-12 col-md-6 col-lg-4 col-xl-3">
                                <img className="card-img-top" src={character.image} alt="Card image" />
                                <div className="card-body">
                                    <h5 className="card-title card-name">{character.name}</h5>
                                    {character.status === "Alive" && (<h5 className="card-text badge badge-success">Alive</h5>)}
                                    {character.status === "Dead" && (<h5 className="card-text badge badge-danger ">Dead</h5>)}
                                    {character.status === "unknown" && (<h5 className="card-text badge badge-dark">Unknown</h5>)}
                                    <p className="card-text badge badge-light">{character.species}.</p>
                                </div>
                            </div>
                        )}

                    </div>
                    {this.state.loading && <Loader />}

                </div>

            </React.Fragment>
        )
    }
}

export default List;