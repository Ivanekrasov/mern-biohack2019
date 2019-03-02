import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';
import Layout from './Components/Layout/Layout';
// import Wizard from './components/Wizard';
// import Cards from './components/Cards'
// import Main from './components/Main'
// import Signup from './components/Signup'
// import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={ Layout } />
            {/*<Route exact path='/dashboard' component={ Dashboard } />*/}
        </Switch>
    </HashRouter>
)