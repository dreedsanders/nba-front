import EditUser from "./Components/EditUser";
import SignIn from "./Components/SignIn";
import { Main } from "./Containers/Main";
import Games from "./Components/Games";
import Standings from "./Components/Standings"
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import "./App.css";


function App() {
  let dispatch = useDispatch();
  let logged_in = useSelector((state) => state.userState);
  // const errormsg = useSelector((state) => state.userState.errormsg);
  let created = useSelector((state) => state.userState.created);
  // let token = localStorage.getItem("token");
      const current = new Date();
      const date = `${
        current.getMonth() + 1
        }/${current.getDate()}/${current.getFullYear()}`;
  const yesterday = `${
    current.getMonth() + 1
  }/${current.getDate() - 1}/${current.getFullYear()}`;

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
      .then((users) => console.log(users));
  };
  // const getTeams = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:3001/api/v1/teams`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((teams) => console.log(teams, "get some"));
  // };
  // const getGames = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:3001/api/v1/games`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((games) => console.log(games, "get some"));
  // };
  // const getPlayers = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:3001/api/v1/players`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((players) => console.log(players, "get some"));
  // };
  // const getPlayoffBrackets = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:3001/api/v1/playoff_brackets`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((playoff_brackets) => console.log(playoff_brackets, "get some"));
  // };

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
          : dispatch({ type: "FAILED", errormsg: data.error })
      })
      .then(console.log(logged_in))
    .then(getUsers(e))
  };

  const handleLogOut = () => {
    dispatch({ type: "SIGN_OUT" });
  }

  const createUser = (e) => {
    e.preventDefault();

    let newName = e.target[0].value;
    let newPassword = e.target[1].value;
    // let password_confirmation = e.target[2].value;
    let newPhoto = e.target[3].value;
    let newUser = {
      name: newName,
      password: newPassword,
      // password_confirmation: password_confirmation,
      photo: newPhoto
    };
    console.log(newUser, "130")
    fetch(`http://localhost:3001/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "CREATE_USER" })
        console.log(data, created, "143")
      })
    e.target.reset()
  };

  const getAllPlayersBdl = () => {
    fetch(`https://www.balldontlie.io/api/v1/players?per_page=100`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((players) => console.log(players));
  }

    const getAllTeamsBdl = () => {
      fetch(`https://www.balldontlie.io/api/v1/teams`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((teams) => console.log(teams));
    };
  
  const getPlayersNba = () => {
      // need to make the below fetch have dynamic parameters based on the team and year clicked in the app
    // can search by country and then in the app filter for the active = true value
        fetch(`https://api-nba-v1.p.rapidapi.com/players?country=USA&active=true`,
        {method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "02e66b9f2fmshc40c9abe86ec5dep1cf267jsn78b29265385e",
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
          Accept: "application/json"
        },
          })
          .then((res) => res.json())
      .then((players)=> console.log(players))
  };
  
  const getTodaysGames = () => {
    fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${date}`,
        {method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "02e66b9f2fmshc40c9abe86ec5dep1cf267jsn78b29265385e",
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
          Accept: "application/json"
        },
          })
          .then((res) => res.json())
      .then((todaysgames)=> console.log(todaysgames))
  }
    const getYesterdaysGames = () => {
      fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${yesterday}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "02e66b9f2fmshc40c9abe86ec5dep1cf267jsn78b29265385e",
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((yesterdayGames) => console.log(yesterdayGames, 'hello'));
    };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/editprofile" element={<EditUser />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route
            path="/mainpage"
            element={
              <Main
                getAllPlayersBdl={getAllPlayersBdl}
                getPlayersNba={getPlayersNba}
                getTodaysGames={getTodaysGames}
                getYesterdaysGames={getYesterdaysGames}
              />
            }
          ></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/standings" element={<Standings />}></Route>
          {/* <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/news" element={<News />}></Route> */}
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

