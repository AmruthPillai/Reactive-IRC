import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
};

class Channel extends Component {
  onClick(e) {
    e.preventDefault();
    const {setChannel, channel} = this.props;
    setChannel(channel);
  }

  render() {
    const {channel, activeChannel} = this.props;
    const active = channel === activeChannel ? 'list-group-item active' : 'list-group-item';

    return (
      <li className={active} onClick={this.onClick.bind(this)}>
        {channel.name}
      </li>
    );
  }
}

Channel.propTypes = propTypes;

export default Channel;