import React, { Component } from 'react';

class ChannelForm extends Component {
    onChange(e) {
      this.setState({
        channelName: e.target.value
      })
    }

    onSubmit(e) {
      // let {channelName} = this.state; // Same Functionality
      let channelName = this.state.channelName;

      console.log(channelName);

      this.setState({
        channelName: ''
      })

      e.preventDefault();
    }
    
    constructor(props) {
      super(props);
      
      this.state = {
        channelName: ''
      };
    }

    render() {
      return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <input className="form-control" type="text" placeholder="Create a new channel" onChange={this.onChange.bind(this)} value={this.state.channelName} />
        </form>
      );
    }
  }

export default ChannelForm;
