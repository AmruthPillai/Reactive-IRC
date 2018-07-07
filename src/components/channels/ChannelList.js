import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Channel from './Channel';

const propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
  };

class ChannelList extends Component {
    render() {
        return (
            <ul>
                { this.props.channels.map((channel, key) => {
                    return (
                        <Channel key={key} channel={channel} {...this.props} />
                    )
                }) }
            </ul>
        );
    }
}

Channel.propTypes = propTypes;

export default ChannelList;
