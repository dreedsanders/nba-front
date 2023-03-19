import React from "react";
import CreateUser from "../Components/CreateUser";
import SignIn from "../Components/SignIn";

export const Main = (props) => {
  return (
    <div className="main-welcome">
      <SignIn signedIn={props.signedIn} />
      <CreateUser createUser={props.createUser} signedIn={props.signedIn} />
    </div>
  );
};