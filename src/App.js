import React, { Component } from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      channels: [
        { name: 'Hardware Support' },
        { name: 'Software Support' }
      ]
    }
  }

  addChannel(channelName) {
    let channels = this.state.channels;
    channels.push({name: channelName});
    this.setState({
      channels: channels
    });
  }
  
  render() {
    return (
      <div className="container mt-5">
        <ChannelList channels={this.state.channels} />
        <hr className="my-3"/>
        <ChannelForm addChannel={this.addChannel.bind(this)} />
      </div>
    );
  }
}

export default App;
