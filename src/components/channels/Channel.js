import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired
};

class Channel extends Component {
  onClick(e) {
    e.preventDefault();
    const {setChannel, channel} = this.props;
    setChannel(channel);
  }

  render() {
    const {channel} = this.props;

    return (
      <li>
        <a onClick={this.onClick.bind(this)}>
          {channel.name}
        </a>
      </li>
    );
  }
}

Channel.propTypes = propTypes;

export default Channel;