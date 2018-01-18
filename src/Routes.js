import React from "react";
import{
    BrowserRouter as Router,
    Route,
    
} from "react-router-dom";
import Todo from './App';
import Counter from './Counter';
import Navbar from './Navbar';
import Calculator from './Calculator';




const customeRoutes = ()=>(

    <Router>
        <div>

            <Navbar/>


            <Route exact path='/' component={Counter}/>
            <Route path='/Todo' component={Todo}/>
            <Route path='/Calculator' component={Calculator}/>
        
        
        
        
        
        
        </div>
    </Router>


)

export default customeRoutes;