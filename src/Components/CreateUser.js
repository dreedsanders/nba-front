import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const CreateUser = (props) => {
              const errormsg = useSelector((state) => state.userState.errormsg);
          let created = useSelector((state) => state.userState.created);
  return (
    <div className="create-user">
      <form
        onSubmit={props.createUser}
        className="forms"
        name="create-user-form"
      >
        <input type="text" name="name" placeholder="Name"></input>
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="Password"
        ></input>
        <br></br>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Retype your password"
        ></input>
        <br></br>
        <input type="text" name="photo" placeholder="Photo"></input>
        <br></br>
        <button type="submit">Create Account</button>
      </form>
      {created ? (
        <Navigate to="/signin" />
      ) : errormsg ? (
        <strong>{errormsg}</strong>
      ) : null}
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default CreateUser
