// import './index.css';
import React, { Component } from 'react'
import userPhoto from '../assets/img/user-photo.svg'
import bell from '../assets/img/icon/bell-icon.svg'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm nav-bar hide">
                <div className=" container d-flex justify-content-between align-items-center ">
                    <a className="h4 font-weight-bold txt-blue" href="./home.html"> Zwallet </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-lg-flex flex-lg-row align-items-center">
                            <div className="d-flex align-items-center">
                                <img className="mobile-l" src={userPhoto} alt="user" height="auto" width="auto" />
                            </div>
                            <div className="d-flex flex-column align-items-center mx-3">
                                <span className="p-0 font-weight-bold">Robert Chandler</span>
                                <span className="p-0 small text-black-50">+62 813-9387-7946</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="mobile-l bel" src={bell} alt="notif" height="" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;