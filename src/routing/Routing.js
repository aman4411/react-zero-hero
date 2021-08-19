//to do routing in react, we need a package called react-router-dom

import React from 'react'
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'

const Home = () => <div>Welcome Home</div>
const About = () => <div>About Page</div>
const Contact = () => <div>Contact Page</div>
const ErrorPage = () => <div>Page Not Found</div>

function Routing() {
    return (
        <Router>
            <div className="container">
                <h2>Routing Implementation</h2>

                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </div>
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/contact"><Contact /></Route>
                    <Route path="/"><Home /></Route>
                    <Route path="*"><ErrorPage /></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routing
