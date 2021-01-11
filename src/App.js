import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Form from './Form'
import RegisterScreen from './Screens/RegisterScreen'

const App = () => {
  return (
    <Router>
        <Route path='/login' component={Form}/>
        <Route path='/register' component={RegisterScreen}/>
    </Router>
  )
}

export default App
