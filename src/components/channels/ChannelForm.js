import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    addChannel: PropTypes.func.isRequired
};

class ChannelForm extends Component {
    onSubmit(e) {
        e.preventDefault();

        const node = this.refs.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = '';
    }

    render() {
        return (
            <div className="channelForm">
                <hr />
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input className="form-control" type="text" ref="channel" placeholder="Create a new channel" />
                </form>
            </div>
        );
    }
}

ChannelForm.propTypes = propTypes;

export default ChannelForm;
