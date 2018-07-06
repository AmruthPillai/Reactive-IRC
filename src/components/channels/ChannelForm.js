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
        channelName = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input className="form-control" type="text" ref="channel" />
            </form>
        );
    }
}


ChannelForm.propTypes = propTypes;


export default ChannelForm;
