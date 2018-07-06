import React, { Component } from 'react';

class Channel extends Component {
  handleClick() {
    console.log('I was clicked!', this.props.name);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick.bind(this)}>
        {this.props.name}
      </li>
    );
  }
}

class ChannelList extends Component {
  render() {
    return (
      <ul className="list-group">
        { this.props.channels.map((channel, key) => {
          return(
            <Channel key={key} name={channel.name} />
          )
        }) }
      </ul>
    );
  }
}

export default ChannelList;
