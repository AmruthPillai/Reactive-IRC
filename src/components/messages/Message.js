import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.object.isRequired
};

class Message extends Component {
  render() {
    const {message} = this.props;

    return (
      <div className="message">
        <span className="small">{message.author}</span>
        <p>{message.body}</p>
        <span className="text-muted small">{message.timestamp}</span>
        <hr className="mb-3" />
      </div>
    );
  }
}

Message.propTypes = propTypes;

export default Message;