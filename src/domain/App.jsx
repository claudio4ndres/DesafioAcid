import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from './pages/Home';
import './app.scss';

function App() {
  return (
    <main className="Main">
      <BrowserRouter>
        <section className="container-page">
          <section className="page">
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </section>
        </section>
      </BrowserRouter>
  </main>
  );
}

export default App;
