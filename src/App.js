import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/" exact component={LoginForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
