import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList';
import UserForm from './UserForm';

const propTypes = {
    users: PropTypes.array.isRequired,
    addUser: PropTypes.func.isRequired
};

class UserSection extends Component {
    render() {
        return (
            <div className="card support users">
                <div className="card-header">
                    <span>Users</span>
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <UserList {...this.props} />
                    <UserForm {...this.props} />
                </div>
            </div>
        );
    }
}

UserSection.propTypes = propTypes;

export default UserSection;
