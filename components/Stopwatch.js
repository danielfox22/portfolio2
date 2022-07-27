import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

// creating class
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hours: 0,
        mins: 0,
        sec: 0,
        mil: 0,
        exercising: 0
    }
  };


  // begin Timer
  begin = () => {
    if (!this.state.exercising) {
        this.setState({exercising: 1});
        this.watch = setInterval(() => this.count(), 100);
      }
  }

  
  count = () => {
    // milli
    this.setState({ mil: this.state.mil + 1});

    // seconds
    if (this.state.mil >= 10) {
        this.setState({sec: this.state.sec + 1});
        this.setState({mil: 0});
    }

    // minutes
    if (this.state.sec >= 60) {
        this.setState({min: this.state.min + 1});
        this.setState({sec: 0 });
    }

    // hours
    if (this.state.min >= 60) {
        this.setState({hour: this.state.hour + 1});
        this.setState({min: 0 });
      }
  }

  // pause
  pause = () =>{
    this.setState({exercising: 0});
    clearInterval(this.watch);
  }

  // clear 
  reset = () => {
      this.setState({
          hours: 0,
          mins: 0,
          sec: 0,
          mil: 0,
          exercising: 0
        });
  }

  render() {
    return(
      <View style={{border: "1px red", padding: "25px", width: "50%"}}>
          <Text h3 style={{textAlign: "center"}}>{this.state.hours}:{this.state.mins}:{this.state.sec}.{this.state.mil}</Text>
          <Button title="Begin" onPress={this.begin} style={{ padding: "15px" }}/>
          <Button title="Stop" onPress={this.pause} style={{ padding: "15px" }}/>
          <Button title="Reset" onPress={this.reset} style={{ padding: "15px" }}/>
      </View>
    );
  }
}

export default Timer;
