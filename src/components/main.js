import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './loginpage';

const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/organizations/:id" render={props => <OrganizationsPage {...props} />} />
            <Route exact path="/grouppage/:id" render={props => <GroupPage {...props} />} />
            <Route exact path="/tasks/:id" render={props => <TasksPage {...props} />} />
            <Route exact path="/settings" component={SettingsPage} />
        </Switch>
    </HashRouter>
)

export default Main;