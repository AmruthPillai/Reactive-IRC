import React, { Component } from 'react';

class Channel extends Component {
    render() {
        return (
            <div>
                <li>{ this.props.name }</li>
            </div>
        );
    }
}

export default Channel;
