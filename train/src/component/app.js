import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrains from './alltrains';
import SingleTrain from './singletrainrain';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllTrains} />
        <Route path="/train/:trainNumber" component={SingleTrain} />
      </Switch>
    </Router>
  );
}

export default App;