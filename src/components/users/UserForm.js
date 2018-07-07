import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    addUser: PropTypes.func.isRequired
};

class UserForm extends Component {
    onSubmit(e) {
        e.preventDefault();

        const node = this.refs.user;
        const userName = node.value;
        this.props.addUser(userName);
        node.value = '';
    }

    render() {
        return (
            <div className="userForm">
                <hr />
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input className="form-control" type="text" ref="user" placeholder="Create a new user" />
                </form>
            </div>
        );
    }
}

UserForm.propTypes = propTypes;

export default UserForm;
