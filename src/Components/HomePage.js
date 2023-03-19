import {React, useState} from 'react'
import CreateUser from './CreateUser'
import SignIn from './SignIn'

export const HomePage = (props) => {
    const [signedin, setSignedin] = useState(false)
    const [createme, setCreateme] = useState(false)

    const signed = (e) => {
        e.preventDefault();
        setSignedin(!signedin)
        if (createme == true) {
            setCreateme(false)
        }
    }
    const wantToCreate = (e) => {
        e.preventDefault();
        setCreateme(!createme)
        if (signedin == true) {
            setSignedin(false)
        }
    }
  return (
    <div className="homepage">
      <div>
        <h1>HomePage</h1>
        <button onClick={signed}>Profile Sign In</button>
        <button onClick={wantToCreate}>Create Account</button>
      </div>
      <div>
        {signedin ? <SignIn signedin={signedin} handleLogin={props.handleLogin} /> : ""}
        {createme ? <CreateUser createUser={props.createUser} /> : ""}
      </div>
    </div>
  );
}
