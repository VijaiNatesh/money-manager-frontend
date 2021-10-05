import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week from './Week';
import Year from './Year';
import Month from './Month';
import Manager from './Manager';


function App() {
    return (
      <Router >
      <div style = {{backgroundColor:"lightblue"}}>       
      <div>
          <Link to="/Home"  >Home</Link>
        </div>
        <div>
          <Link to="/Week"  >Weekly income and expenditure</Link>
        </div>
        <div>
          <Link to="/Month">Monthly income and expenditure</Link>
        </div>
        <div>
          <Link to="/Year" >Yearly income and expenditure</Link>
        </div>        
    </div>
       <hr />
  
        <Switch>  
        <Route path="/Home">
          <Manager /> 
          </Route>        
          <Route path="/Week">
          <Week /> 
          </Route>
          <Route path="/Month">
            <Month />
          </Route>
          <Route path="/Year">
            <Year />            
          </Route>          
        </Switch>
      </Router>
    )
    
  }
  

  export default App;