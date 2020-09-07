import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home'
import Tasks from '../../pages/Tasks'
import Form from '../form/Form';


const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/tasks' component={Tasks} />
            <Route path='/signin' component={Form} />
            <Route path='/signup' component={Form} />
        </Switch>
    );
}

export default Main;