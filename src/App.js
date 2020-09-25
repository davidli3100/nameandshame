import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import './static/fonts/fonts.css'
import Navbar from './Components/Navbar'
import Index from './Pages'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CSSReset/>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Index/>
            </Route>
            <Route path="/employer">
              <div>Employer Route</div>
            </Route>
          </Switch>
        </Router>        
      </ThemeProvider>
    </div>
  );
}

export default App
