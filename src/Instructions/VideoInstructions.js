import React, { Component } from "react";

const youtubeLink = {
  'Windows 7, Vista and XP': "https://www.youtube.com/embed/wGWrXofjIyo",
  'Windows 10 and 8.x': "https://www.youtube.com/embed/kq1NFCbR1wI",
  'Chromebook': "https://www.youtube.com/watch?v=JNzDIMoaMSc"
};

export default class VideoInstructions extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Video setup for {this.props.platform}</h1>
        <p className="lead">
          Follow the video installation below to configure a VPN connection to your DAppNode
        </p>
        <div className="videoWrapper">
          <iframe
            title="Video setup instructions"
            type="text\/html"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            src={youtubeLink[this.props.platform]}
          />
        </div>
      </div>
    );
  }
}
