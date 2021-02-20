import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory as history } from 'react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import App from './App';
// Screens
import { AutomaticRecipeScreen } from './screens/AutomaticRecipeScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import ManualRecipeScreen from './screens/ManualRecipeScreen';
import { NewRecipeScreen } from './screens/NewRecipeScreen';
import { RecipeScreen } from './screens/RecipeScreen';


const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={DashboardScreen} />
        <Route exact path="/recipe" component={RecipeScreen} />
        <Route exact path="/newrecipe" component={NewRecipeScreen} />
        <Route exact path="/newrecipe/auto" component={AutomaticRecipeScreen} />
        <Route exact path="/newrecipe/manual" component={ManualRecipeScreen} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
