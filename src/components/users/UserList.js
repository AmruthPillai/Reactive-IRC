import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';

const propTypes = {
  users: PropTypes.array.isRequired
};

class UserList extends Component {
  render() {
    return (
      <div className="d-flex userList">
      { this.props.users && this.props.users.length > 0 &&
        <ul className="list-group">
        { this.props.users.map((user, key) => {
          return (
            <User key={key} user={user} {...this.props} />
          )
        }) }
        </ul>
      }
      </div>
    );
  }
}

UserList.propTypes = propTypes;

export default UserList;
