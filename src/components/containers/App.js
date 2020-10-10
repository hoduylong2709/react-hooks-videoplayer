import React from 'react';
import HdlPlayer from './HdlPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HdlPlayer} />
      <Route exact path="/" component={HdlPlayer} />
    </Switch>
  </BrowserRouter>
)

export default App;