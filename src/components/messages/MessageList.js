import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const propTypes = {
  messages: PropTypes.array.isRequired,
  activeChannel: PropTypes.object.isRequired
};

class MessageList extends Component {
  render() {
    return (
      <div className="d-flex messageList">
      { this.props.messages && this.props.messages.length > 0 &&
        <div className="messages">
        { this.props.messages.map((message, key) => {
          return (message.channel === this.props.activeChannel.name) ? (<Message key={key} message={message} {...this.props} />) : null
        }) }
        </div>
      }
      </div>
    );
  }
}

MessageList.propTypes = propTypes;

export default MessageList;
