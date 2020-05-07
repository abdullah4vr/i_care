import React from 'react';
import './App.css';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import IssueListing from './components/IssueListing/IssueListing'; 
import SingleIssue from './components/SingleIssue/SingleIssue';
import AddIssue from './components/AddIssue/AddIssue';
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/issue/:id" exact component={SingleIssue} />
    <Route path="/addIssue" exact component={AddIssue} />
    <Route path="/" component ={IssueListing}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;