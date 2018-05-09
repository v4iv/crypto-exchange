/**
 * Created by vaibhav on 9/5/18
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import asyncComponent from "../AsyncComponent";

const AsyncHomePage = asyncComponent(() => import('../../containers/HomePage'));

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={AsyncHomePage}/>
            </Switch>
        </div>
    );
};

export default Main;