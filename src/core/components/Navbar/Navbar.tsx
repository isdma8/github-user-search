import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (

<nav className="main-nav">
    <div className="col-3 p-0">
        <Link to="/" className="nav-logo-text">
            <h4>Bootcamp DevSuperior</h4>
        </Link>
    </div>
</nav>


);


export default Navbar;