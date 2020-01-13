import React from 'react'

import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const TodoPage = () => {

    let match = useRouteMatch();


    return (
        <div className = 'page-wrapper'>
        <h1>TodoPage</h1>

        <ul>
            <li>
            <Link to={`${match.url}/input`}>INPUT</Link>
            </li>
            <li>
            <Link to={`${match.url}/list`}>LIST</Link>
            </li>
        </ul>

        <Switch>
        
        <Route path='/todo/list'>
            <TodoList></TodoList>
        </Route>

        <Route path={match.path}>
            <TodoInput></TodoInput>
        </Route>

        </Switch>

        </div>
    )
}

export default TodoPage