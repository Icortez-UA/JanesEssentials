import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import  history  from '../_helpers/history';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import  LoginPage  from '../pages/LoginPage/LoginPage';
import  RegisterPage  from '../pages/RegisterPage/RegisterPage';
import AllStrains from "../pages/all/all";
import NavTabs from "../components/navbar/navbar"



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
                                <PrivateRoute exact path="/home" component={HomePage} />
                                <Route exact path="/" component={LoginPage} />
                                <Route exact path="/home" component={AllStrains} />
                                <Route path="/LoginPage" component={LoginPage} />
                                <Route path="/RegisterPage" component={RegisterPage} />
                                <Redirect from="/" to="/home" />
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