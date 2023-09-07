import {React} from 'react'
import CreateUser from './CreateUser'
import SignIn from './SignIn'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function HomePage(props){
  //   const [signedin, setSignedin] = useState(false)
  // const [createme, setCreateme] = useState(false)
  let create_user = useSelector((state) => state.userState.create_user);
  let sign_in = useSelector((state) => state.userState.signIn);
    let dispatch = useDispatch();
  let loggedin = useSelector((state) => state.userState.logged_in)
  let navigate = useNavigate(); 



  const signed = (e) => {
        e.preventDefault();
       dispatch({ type: "SIGN" });
  }
  const wantToCreate = (e) => {
        e.preventDefault();
      dispatch({ type: "CREATE" });
  }
  const mainPage = () => {
    navigate("/mainpage")
  }
  return (
    <div className="homepage">
      <div>
        {loggedin ? (
          <button onClick={() => props.handleLogOut}>Sign Out</button>
        ) : (
          ""
        )}
      </div>
      <div>
        <h1>HomePage</h1>
        <button onClick={signed}>Profile Sign In</button>
        <button onClick={wantToCreate}>Create Account</button>
      </div>
      <div>
        <button onClick={mainPage}>ENTER</button>
      </div>
      <div>
        {sign_in ? (
          <SignIn sign_in={sign_in} handleLogin={props.handleLogin} />
        ) : (
          ""
        )}
        {create_user ? <CreateUser createUser={props.createUser} /> : ""}
      </div>
    </div>
  );
}