import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/CreateUser.css';

class CreateUser extends Component {
  state = {
    email: '',
    fname: '',
    lname: '',
    age: null,
    height: {
      large: null,
      small: null
    },
    weight: null,
    shoes: [
      {
        brand: '',
        model: '',
        size: null,
        distance: null
      }
    ],
    measurement_system: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validate()) axios.post('http://localhost:5000/user', this.state);
    else {
      alert('Missing required pieces of information.');
    }
  };

  handleUoMChange = e => {
    const value = e.target.value;
    this.setState({
      measurement_system: value
    });
  };

  validate = () => {
    const required = ['email', 'fname', 'measurement_system'];
    for (let i in this.state) {
      for (let j of required) {
        if (i === j && !this.state[i]) {
          return false;
        }
      }
    }
    return true;
  };

  render = () => {
    return (
      <div className='create-user'>
        <div>
          <h3 className='center-align'>Create User</h3>
        </div>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <p className='center-align'>
              <span className='red-asterisk'>*</span>
              Required Information
            </p>
            <div className='row' id='email'>
              <div className='col s6 center-align'>
                <p>
                  Email
                  <span className='red-asterisk'>*</span>
                </p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' />
              </div>
            </div>
            <div className='row' id='fname'>
              <div className='col s6 center-align'>
                <p>
                  First Name
                  <span className='red-asterisk'>*</span>
                </p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' />
              </div>
            </div>
            <div className='row' id='lname'>
              <div className='col s6 center-align'>
                <p>Last Name</p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' />
              </div>
            </div>
            <div className='row' id='age'>
              <div className='col s6 center-align'>
                <p>Age</p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' />
              </div>
            </div>
            <div className='row' id='unit'>
              <div className='col s6 center-align'>
                <p>
                  Unit of Measurement
                  <span className='red-asterisk'>*</span>
                </p>
              </div>
              <div className='col s6 center-align'>
                <div className='row'>
                  <div className='col s6 center-align'>
                    <label className='radio-btn'>
                      <input
                        type='radio'
                        name='unit-group'
                        value='Imperial'
                        onChange={this.handleUoMChange}
                      />
                      <span>Imperial</span>
                    </label>
                  </div>
                  <div className='col s6 center-align'>
                    <label className='radio-btn'>
                      <input
                        type='radio'
                        name='unit-group'
                        value='Metric'
                        onChange={this.handleUoMChange}
                      />
                      <span>Metric</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='row' id='height'>
              <div className='col s6 center-align'>
                <p>Height</p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' placeholder='height in ft/m' />
              </div>
              <div className='col s6 offset-s6 center-align'>
                <input type='text' placeholder='height in in/cm' />
              </div>
            </div>
            <div className='row' id='Weight'>
              <div className='col s6 center-align'>
                <p>Weight</p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' placeholder='Feet/Meters' />
              </div>
            </div>
            <button className='btn center-align'>Submit</button>
          </form>
        </div>
      </div>
    );
  };
}

export default CreateUser;
