import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Channel from './Channel';

const propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
  };

class ChannelList extends Component {
    render() {
        return (
            <div className="d-flex channelList">
                { this.props.channels && this.props.channels.length > 0 &&
                    <ul className="list-group">
                        { this.props.channels.map((channel, key) => {
                            return (
                                <Channel key={key} channel={channel} {...this.props} />
                            )
                        }) }
                    </ul>
                }
            </div>
        );
    }
}

Channel.propTypes = propTypes;

export default ChannelList;
