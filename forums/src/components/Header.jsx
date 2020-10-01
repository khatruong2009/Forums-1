import React from 'react';

function Header () {
  return (
      <header id="header">
        <nav>
            <ul className="nav-menu">
                <li className="menu-active"><a className="nav-link" href="virtualLF">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#schedule">Agenda</a></li>
                <li><a className="nav-link" href="#speakers">Speakers</a></li>
                <li><a className="nav-link" href="#sponsors">Sponsors</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
                <li><a className="nav-link" href="https://www.cg-la.com/privatemeetings">Private Meetings</a></li>
                <li><a className="nav-link" href="https://www.cg-la.com/store?category=GViP">Custom Services</a></li>
                <li className="buy-tickets"><a href="https://www.cg-la.com/store/global-registration-all-access">Register Now</a></li>
            </ul>
        </nav> {/*#nav-menu-container*/}
    </header> //End Header
  )
}

export default Header;