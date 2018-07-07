import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

const propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
};

class ChannelSection extends Component {
    render() {
        return (
            <div className="card support channels">
                <div className="card-header">
                    <span>Channels</span>
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        );
    }
}

ChannelSection.propTypes = propTypes;

export default ChannelSection;
