import React, { Component } from 'react'
import logoImg from '../../img/MOVIEDOM1.png';
export class Logo extends Component {
  render() {
    return (
        <div className="header_logo">
            <a href="index.html">
                <img src={logoImg} alt="logo" />
            </a>
        </div>
    )
  }
}

export default Logo