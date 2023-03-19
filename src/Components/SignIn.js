import React from 'react'
import { Link } from "react-router-dom";

const SignIn = (props) => {
  return (
    <div className="sign-in">
      <form className="forms" name="get-users-form" onSubmit={props.handleLogin}>
        <input type="text" placeholder="Name or email"></input>
        <br></br>
        <input type="text" placeholder="Password"></input>
        <br></br>
        <button type="submit"> Sign In </button>
        <br></br>
        <span></span>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
}
export default SignIn

