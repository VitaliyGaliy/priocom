import React from 'react';
import { Route } from 'react-router-dom'
import Square from '../containers/SquaresContainer'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Square} />
    </main>
  </div>
)

export default App
