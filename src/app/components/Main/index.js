/**
 * Created by vaibhav on 9/5/18
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePageContainer from '../../containers/HomePage';
import NotFoundPage from "../NotFoundPage";

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePageContainer}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default Main;