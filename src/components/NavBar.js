import React from 'react';

import { browserHistory } from 'react-router';

const NavBar = () => (
    <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li>
                    <a href="#" onClick={(e) => {
                            e.preventDefault();
                            browserHistory.push('/')
                    }}>
                        Books
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => {
                            e.preventDefault();
                            browserHistory.push('/authorList')
                    }}>
                        Authors
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;

