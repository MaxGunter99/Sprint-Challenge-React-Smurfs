import React, { Component } from 'react';
import axios from'axios';


class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: null
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        const smurf = this.props.smurfs.find(smurf => String(smurf.id) === id )
        this.setState(() => ({ smurf: smurf }))
    }
    
    deleteItem = id => {
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(res => {
                this.setState({ smurf: res.data });
                this.props.history.push('');
            })
            .catch(err => console.log(err));
    };

    render() {

        if (!this.state.smurf){
            return <div>Loading....</div>
        }

        const { name, age, height, id } = this.state.smurf;

        return (
            <div className='smurf'>
                <h4><strong>{name}</strong></h4>
                <p>{age} years old</p>
                <p>contact at {height}</p>
                <a href='http://localhost:3000/'><button onClick={() => this.deleteItem(this.state.smurf.id)}>Delete Item</button></a>
            </div>
        );
    }
}

export default Smurf;