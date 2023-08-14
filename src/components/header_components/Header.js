import React, { Component } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import HeaderIcon from './HeaderIcon'
import HeaderMain from './HeaderMain'

export class Header extends Component {
  render() {
    return (
        <header>
        <div className="header_shadow">
          <div className="header_container row">
              
              <Logo />
  
              <Nav />
              
              <HeaderIcon />
  
  
          </div>
  
          <HeaderMain />
        </div>
      </header>
    )
  }
}

export default Header