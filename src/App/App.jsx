import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import  history  from '../_helpers/history';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import  home  from '../pages/home/home';
import  LoginPage  from '../pages/LoginPage/LoginPage';
import  RegisterPage  from '../pages/RegisterPage/RegisterPage';
import AllStrains from "../pages/all/all";
import NavTabs from "../components/navbar/navbar"
import Home from "../pages/home/home";
import Hybrid from "../pages/hybrid/hybrid";



class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <NavTabs />
                            <Switch>                               
                                <Route exact path="/" component={Home} />
                                <Route exact path="/all" component={AllStrains} />
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/hybrid" component={Hybrid} />
                                <Route exact path="/LoginPage" component={LoginPage} />
                                <Route path="/RegisterPage" component={RegisterPage} />                                
                            </Switch>
                        </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };