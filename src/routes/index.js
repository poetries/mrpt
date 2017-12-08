import React from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'; 
import AuthRoute from '@/components/AuthRoute';
import {routeRules} from '@/config/routeRules'

const routeMap = (
    <Router>
        <div>
            <AuthRoute />
            <Switch>
                {routeRules.map(v=>(
                    <Route 
                        key={v.path} 
                        path={v.path} 
                        component={v.component} 
                        exact={v.exact} 
                    />
                 ))
                }
            </Switch>
        </div>
    </Router>
)

export default routeMap;
