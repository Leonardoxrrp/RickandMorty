import React, { Component } from 'react'
import Loader from "../components/Loader"
import "../styles/list.css"

class List extends Component {
    state = {
        loading: true,
        character: [],
        page: 1,
    }
    componentDidMount() {
        this.fetchCharacter()
    }
    fetchCharacter = async (type) => {
        let typeValue = 1;
        this.setStae=({loading: true})

        if (type === 1) {
            typeValue = this.state.page + 1;
        }
        else if (type === 0) {
            typeValue = this.state.page - 1;

        }
        this.setState({loading: true})
        try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${typeValue}`)
                const data = await response.json()
                this.setState({
                    character: data.results,
                    loading: false,
                    page: typeValue,
                }) 

        } catch (error) {
            console.log(error)
            this.setState({ loading: false })
        }

    }
    render() {
        return (
            <React.Fragment>
                <div className="header-container">
                    <div className="container">
                        <div className="title">
                            <h1>Rick and Morty</h1>
                        </div>
                    </div>
                </div>
                <div className="body-container">
                    <div className="container">
                        <div className="row buttons-container">
                            {this.state.page > 1 &&

                                (
                                    <button onClick={() => this.fetchCharacter(0)} className="btn btn-success previous">Previous</button>
                                )}
                                    <p className="pageNumber">Page: {this.state.page}</p>
                            {this.state.loading === false && this.state.page <34 &&
                                (
                                    <button onClick={() => this.fetchCharacter(1)} className="btn btn-success next">Next</button>
                                )}

                        </div>
                        <div className="row no-gutters card-container">
                            {this.state.character.map(character =>
                                <div className="card col-12 col-md-6 col-lg-4 col-xl-3" key={character.id}>
                                    <img className="card-img-top" src={character.image} alt={character.name} />
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
                    </div>
                    {this.state.loading === true &&
                            <div className="loader">
                                <Loader />
                            </div>
                        }

                </div>


            </React.Fragment>
        )
    }
}

export default List;