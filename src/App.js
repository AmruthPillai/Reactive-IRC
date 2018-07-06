import React, { Component } from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

let channels = [
  { name: 'Hardware Support' },
  { name: 'Software Support' }
];

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <ChannelList channels={channels} />
        <hr className="my-3"/>
        <ChannelForm />
      </div>
    );
  }
}

export default App;
