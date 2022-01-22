import React, { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmailReg from './pages/EmailReg/EmailReg'
import VerifyCode from './pages/VerifyCode/VerifyCode'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import CreatePassword from './pages/CreatePassword/CreatePassword'
import SecureSeed from './pages/SecureSeed/SecureSeed'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoader(false)
    }, 2000)

  }, [])

  return (
    <>

      <Router>

          {loader && <Home/>}

          {!loader && <>
            <Route exact path='/'>
              <EmailReg/>
            </Route>

            <Route path='/verifyEmail'>
              <VerifyCode para1={"We've sent a 6-digit verification code to the email address"} para2={'johndoe@gmail.com'}/>
            </Route>

            <Route path='/verifyPhone'>
              <VerifyCode para1={"We've sent a 6-digit verification code to your phone"} para2={'+1 4747948894'}/>
            </Route>

            <Route path='/createAccount'>
              <CreateAccount/>
            </Route>

            <Route path='/createPassword'>
              <CreatePassword/>
            </Route>

            <Route path='/createSeedPhrase'>
              <SecureSeed/>
            </Route>

            <Route path='/login'>
              <Login/>
            </Route>

            <Route path='/dashboard'>
                <Dashboard/>
            </Route>
          </>}

      </Router>

    </>
  );
}

export default App;
