import React, { Component } from 'react';
import RunList from '../Runs/RunList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { runs, auth } = this.props;
    if (!auth) {
      return <Redirect to='/signin' />;
    } else {
      return (
        <div className='dashboard container'>
          <div className='row'>
            <div className='col s12 m6'>
              <RunList runs={runs} />
            </div>
          </div>
        </div>
      );
    }
  }
}

// const mapStateToProps = state => {
//   return {
//     runs: 'something', // TODO: Figure these out later
//     auth: true
//   };
// };

export default connect(null)(Dashboard);
