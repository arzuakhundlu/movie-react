import React, { Component } from 'react'
import img1 from '../img/Vector (5).png';
import img2 from '../img/Vector (6).png';
import img3 from '../img/Vector (7).png';
import img4 from '../img/Vector (1).png';
import Logo from './header_components/Logo';
export class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="footer_container">
                <Logo />
                <div className="links">
                    <ul className="main-nav row">
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Upcoming</li>
                        <li>Trailers</li>
                        <li>My list</li>
                    </ul>
                </div>
                <div className="social_media">
                    <ul className="row">
                        <li><img src={img1} alt="" /></li>
                        <li><img src={img2} alt="" /></li>
                        <li><img src={img3} alt="" /></li>
                        <li><img src={img4} alt="" /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer