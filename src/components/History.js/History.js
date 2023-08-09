import React from 'react';

class Compass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0
    };
  }

  componentDidMount() {
    this.watchCompass();
  }

  componentWillUnmount() {
    this.stopWatchingCompass();
  }

  watchCompass() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.handleCompass);
    } else {
      console.warn("Compass not supported in this browser.");
    }
  }

  stopWatchingCompass() {
    if (window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', this.handleCompass);
    }
  }

  handleCompass = (event) => {
    if (event.webkitCompassHeading) {
      // For iOS devices
      this.setState({ angle: event.webkitCompassHeading });
    } else {
      this.setState({ angle: event.alpha });
    }
  }

  render() {
    const { angle } = this.state;

    return (
      <div  className="compass my-40">
        <div className="arrow" style={{ transform: `rotate(${angle}deg)` }}></div>
      </div>
    );
  }
}

export default Compass;
