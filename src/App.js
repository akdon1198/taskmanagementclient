import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TasksPage} />
      </div>
    </Router>
  );
}

export default App;