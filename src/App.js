import React, { Component } from 'react';
import ChannelList from './ChannelList';

let channels = [
  { name: 'Hardware Support' },
  { name: 'Software Support' }
];

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <ChannelList channels={ channels } />
      </div>
    );
  }
}

export default App;
