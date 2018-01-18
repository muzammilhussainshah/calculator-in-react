import React from 'react';
import {
    Link
} from "react-router-dom";




const Navbar = () => (

    <ul>
        
        <li>
            <Link to='/'>
                Counter app
            </Link>
        </li>
        <li>
            <Link to='/Todo'>
                Todo App
            </Link>
        </li>
        <li>
            <Link to='/Calculator'>
                Calculator
            </Link>
        </li>
        

    </ul>


)
export default Navbar;