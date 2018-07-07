import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const propTypes = {
  activeChannel: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired
};

class MessageSection extends Component {
  render() {
    let {activeChannel} = this.props;
    return (
      <div className="card messages">
        <div className="card-header">
          <span>{ activeChannel.name }</span>
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
    );
  }
}

MessageSection.propTypes = propTypes;

export default MessageSection;
