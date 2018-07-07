import React, { Component } from "react";
import ChannelSection from "./components/channels/ChannelSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    }
  }

  addChannel(name) {
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});
    // Todo: Get Active Channel Messages
  }
  
  render() {
    return (
      <div>
        <ChannelSection
          channels={this.state.channels}
          addChannel={this.addChannel.bind(this)}
          setChannel={this.setChannel.bind(this)}
        />
      </div>
    );
  }
}

export default App;
