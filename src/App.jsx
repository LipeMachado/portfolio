import React from 'react'
import { GlobalStyle } from './styledGlobal.jsx'
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './router.jsx'

export default function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </div>
  )
}