import React, { Component } from "react";
import Windows10 from "./Windows10";
import Windows7 from "./Windows7";

export default class Windows extends Component {
  render() {
    // <Credential tag={'server'}/>
    return (
      <div>
        <Windows10 />
        <Windows7 />
      </div>
    );
  }
}
