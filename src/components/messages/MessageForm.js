import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    addMessage: PropTypes.func.isRequired
};

class MessageForm extends Component {
    onSubmit(e) {
        e.preventDefault();

        const node = this.refs.message;
        const message = node.value;
        this.props.addMessage(message);
        node.value = '';
    }

    render() {
        return (
            <div className="messageForm">
                <hr />
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input className="form-control" type="text" ref="message" placeholder="Enter a message" />
                </form>
            </div>
        );
    }
}

MessageForm.propTypes = propTypes;

export default MessageForm;
