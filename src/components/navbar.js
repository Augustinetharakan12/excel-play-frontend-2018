import React from 'react'
import { Link } from 'react-router-dom'


// sample navbar
const NavBar = props => (
    <ul>
        <li><Link to="/">nav 1</Link></li>
        <li><Link to="/">nav 2</Link></li>
        <li><Link to="/">nav 3</Link></li>
    </ul>
);

export default NavBar