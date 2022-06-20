import React from 'react';

let e = React.createElement;

export default class Login extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="#">ReactLogin</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home <span class="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link text-white" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link text-white" href="#">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}