import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: []
        };
    }

    render() {
        return (
            <div className='smurfList'>
                {this.props.smurfs.map(smurf => (
                    <SmurfDetails key={smurf.id} smurf={smurf}/>
                ))}
            </div>
        )
    }
}

function SmurfDetails ({ smurf }) {

  const { name, age, height } = smurf;

  return(
      <div className='smurf-card'>
          <p><Link to={`/smurfs/${smurf.id}`}><strong>Name: {name}</strong></Link></p>
          <p>Age: {age}</p>
          <p>Height: {height}</p>
      </div>
  );
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};