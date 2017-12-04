import React from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'; //v4
import Dashboard from '../containers/Dashboard';
import AuthRoute from '../components/AuthRoute';
import Login from '../containers/Login';
import Search from '../containers/Search';
import Customer from '../containers/Customer';

const routeRules = [
    {
      path:'/login',
      component:Login,
      exact:true
    },
    {
      path:'/search/:keyword',
      component:Search,
      exact:false
    },
    {
      path:'',
      component:Dashboard,
      exact:false
    }
]
const routeMap = (
    <Router>
        <div>
            <AuthRoute /> {/*授权路由，验证用户登录信息*/}
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
