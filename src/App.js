import Main from "./Containers/Main";
import EditUser from "./Components/EditUser";
import SignIn from "./Components/SignIn";
import { HomePage } from "./Components/HomePage";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  BrowserRouter as Router, 
  useNavigate
} from "react-router-dom";
import "./App.css";

function App() {
  let dispatch = useDispatch();
  // let logged_in = useSelector((state) => state.userState);
  const errormsg = useSelector((state) => state.userState.errormsg);
  let created = useSelector((state) => state.userState.created);
  let token = localStorage.getItem("token");

  /*
  I need to:
  ... Log out button to stay at top and chage state if clicked
  ...use jwt auth to handle login
  . create user button not creating user.just giving the name taken error. 
  make logout button clear the local storage
  1. Create Routes
  2. Link pages
  3. Complete Crud
  4. Sign in, Edit, LogOut pages
  5. Profile Page
  6. Home page display(no stats)
  7. Game Tracker
  8. Playoff Bracket
  9. Standings Page
  10. Teams Page
  11. Player Page
  12. Bet friends?
  13. College? Foreign league tracker? former nba in foreign league tracker?
  */

 const getUsers = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/v1/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((users) => console.log(users, "get some"));
  };
  const getTeams = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/v1/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((teams) => console.log(teams, "get some"));
  };
  const getGames = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/v1/games`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((games) => console.log(games, "get some"));
  };
  const getPlayers = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/v1/players`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((players) => console.log(players, "get some"));
  };
  const getPlayoffBrackets = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/v1/playoff_brackets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((playoff_brackets) => console.log(playoff_brackets, "get some"));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let user = {
        name: e.target[0].value,
        password: e.target[1].value,
      };

    let reqPackage = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}` //add this back after figure out JWT
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:3001/api/v1/login", reqPackage)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token)
        localStorage.token !== "undefined"
          ? dispatch({
              type: "SIGN_IN",
              current_user: data.user,
              errormsg: data.error,
            })
          : dispatch({ type: "FAILED", errormsg: data.error });
      })
  };

  const handleLogOut = () => {
    dispatch({ type: "SIGN_OUT" });
  }

  const createUser = (e) => {
    e.preventDefault();
    let newName = e.target[0].value;
    let newPassword = e.target[1].value;
    let password_confirmation = e.target[2].value;
    let newPhoto = e.target[3].value;
    let newUser = {
      name: newName,
      password: newPassword,
      password_confirmation: password_confirmation,
      photo: newPhoto,
    };
    fetch(`http://localhost:3001/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "CREATE_USER" });
        console.log(data, localStorage.getItem("token"));
      });
    e.target.reset()
  };

  return (
    <div className="App">
      <Router>
        <button onClick={() => handleLogOut}>Sign Out</button>
        <Routes>
          <Route
            path="/"
            element={<HomePage createUser={createUser} handleLogin={handleLogin} />}
          ></Route>
          <Route path="/editprofile" element={<EditUser />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

