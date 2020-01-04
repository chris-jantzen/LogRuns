import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/CreateUser.css';

class CreateUser extends Component {
  // state = {
  //   email: '',
  //   fname: '',
  //   lname: '',
  //   age: null,
  //   height: {
  //     large: null,
  //     small: null
  //   },
  //   weight: null,
  //   measurement_system: ''
  // };

  state = {
    email: 'cjantzen@mail.com',
    fname: 'Chris',
    lname: 'Jantzen',
    age: 22,
    height: {
      large: 6,
      small: 0
    },
    weight: 140,
    measurement_system: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validate())
      axios
        .post('http://localhost:5000/user', this.state)
        .catch(err => console.error(err));
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

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleHeight = e => {
    this.setState({
      height: {
        [e.target.id]: e.target.value
      }
    });
  };

  validate = () =>
    this.state.email && this.state.fname && this.state.measurement_system;

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
            <div className='row'>
              <div className='col s6 center-align'>
                <p>
                  Email
                  <span className='red-asterisk'>*</span>
                </p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' id='email' onChange={this.handleChange} />
              </div>
            </div>
            <div className='row'>
              <div className='col s6 center-align'>
                <p>
                  First Name
                  <span className='red-asterisk'>*</span>
                </p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' id='fname' onChange={this.handleChange} />
              </div>
            </div>
            <div className='row'>
              <div className='col s6 center-align'>
                <p>Last Name</p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' id='lname' onChange={this.handleChange} />
              </div>
            </div>
            <div className='row'>
              <div className='col s6 center-align'>
                <p>Age</p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' id='age' onChange={this.handleChange} />
              </div>
            </div>
            <div className='row'>
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
            <div className='row'>
              <div className='col s6 center-align'>
                <p>Height</p>
              </div>
              <div className='col s6 center-align'>
                <input
                  type='text'
                  placeholder='height in ft/m'
                  id='large'
                  onClick={this.handleHeightLarge}
                />
              </div>
              <div className='col s6 offset-s6 center-align'>
                <input
                  type='text'
                  placeholder='height in in/cm'
                  id='small'
                  onClick={this.handleHeightSmall}
                />
              </div>
            </div>
            <div className='row' id='Weight'>
              <div className='col s6 center-align'>
                <p>Weight</p>
              </div>
              <div className='col s6 center-align'>
                <input type='text' placeholder='Pounds/Kilograms' />
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
