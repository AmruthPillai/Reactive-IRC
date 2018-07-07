import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

const propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired
};

class ChannelSection extends Component {
    render() {
        return (
            <div>
                <ChannelList {...this.props} />
                <ChannelForm {...this.props} />
            </div>
        );
    }
}

ChannelSection.propTypes = propTypes;

export default ChannelSection;
