import React, { Component } from "react";
import ChannelSection from "./components/channels/ChannelSection";
import UserSection from "./components/users/UserSection";
import MessageSection from "./components/messages/MessageSection";

import Socket from './socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        {name: 'Hardware Support'},
        {name: 'Software Support'}
      ],
      users: [],
      messages: [
        {
          channel: 'Hardware Support',
          author: 'Ashok',
          body: 'Hey there, how can I help you?',
          timestamp: 'Sat Jul 07 2018 13:08:28' // Date().toLocaleString()
        }
      ],
      activeChannel: {},
      connected: false
    }

    this.state.activeChannel = this.state.channels[0];
  }

  componentDidMount() {
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));

    socket.on('channel add', this.onAddChannel.bind(this));
    socket.on('user add', this.onAddUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this));
  }

  onMessageAdd(message) {
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }

  onAddUser(user) {
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  }

  onEditUser(editUser) {
    let {users} = this.state;

    users = users.map(user => {
      if (editUser.id === user.id) {
        return editUser;
      }
      return user;
    });

    this.setState({users});
  }

  onRemoveUser(removeUser) {
    let {users} = this.state;

    users = users.filter(user => {
      return user.id !== removeUser.id;
    });

    this.setState({users});    
  }

  onConnect() {
    this.setState({connected: true});

    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  }

  onDisconnect() {
    this.setState({connected: false});
  }

  onAddChannel(channel) {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }

  addChannel(name) {
    this.socket.emit('channel add', {name});
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});
    this.socket.emit('message unsubscribe');
    this.setState({messages: []});
    this.socket.emit('message subscribe', {
      channelId: activeChannel.id
    });
  }

  setUserName(name) {
    this.socket.emit('user edit', {name});
  }

  addMessage(body) {
    let {activeChannel} = this.state;
    this.socket.emit('message add', {
      channelId: activeChannel.id, body
    });
  }
  
  render() {
    return (
      <div className="app container-fluid d-flex">
        <div className="nav d-flex flex-column">
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
          <UserSection
            {...this.state}
            addUser={this.addUser.bind(this)}
          />
        </div>

        <MessageSection
          {...this.state}
          addMessage={this.addMessage.bind(this)}
        />
      </div>
    );
  }
}

export default App;
