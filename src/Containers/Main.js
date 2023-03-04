import React from 'react'
import CreateUser from '../Components/CreateUser';

export default class Main extends React.Component {
  getUsers = (e) => {
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
  getTeams = (e) => {
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
  getGames = (e) => {
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
  getPlayers = (e) => {
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
  getPlayoffBrackets = (e) => {
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

  createUser = (e) => {
    e.preventDefault();
    let newName = e.target[0].value;
    let newPassword = e.target[2].value;
    let newPhoto = e.target[3].value;
    let newUser = {
      name: newName,
      password: newPassword,
      photo: newPhoto,
    };
    fetch(`http://localhost:3001/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((user) => console.log(user));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.getUsers} class="forms" name='get-users-form'>
          <button type="submit"> Hello </button>
        </form>
        < CreateUser createUser={this.createUser} />
      </div>
    );
  }
}