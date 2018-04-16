import * as React from 'react' 
import { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status';
import Navbar from './navbar';
import routeOptions from '../../routes/routes';

class App extends Component {
    render() {
        let routes = routeOptions.routes.map(({ path, component, exact }, i) =>
            <Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
        );
        let redirects = routeOptions.redirects.map(({ from, to, status }, i) =>
            <RedirectWithStatus key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
        );
        return (
            <div>
                <Navbar />
                <Switch>
                    {routes}
                    {redirects}
                </Switch>
            </div>
        );
    }
}
export default App;