import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Form from './Form'
// import RegisterScreen from './Screens/RegisterScreen'
// import LoginScreen from './Screens/LoginScreen'
// import useToken from './usetoken';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }



const App = () => {
//   const { token, setToken } = useToken();

// if(!token) {
//   return <LoginScreen setToken={setToken} />
// }
  return (
    <Router>
        <Route path='/' component={Form} exact/>
    </Router>
  )
}

export default App
