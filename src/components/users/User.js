import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.object.isRequired
};

class User extends Component {
  render() {
    const {user} = this.props;

    return (
      <li className="list-group-item">
        {user.name}
      </li>
    );
  }
}

User.propTypes = propTypes;

export default User;