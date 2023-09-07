import React from "react";
import CreateUser from "../Components/CreateUser";
import SignIn from "../Components/SignIn";
import { Scoreboard } from "../Components/Scoreboard";
import { Navbar } from "../Components/Navbar";

export const Main = (props) => {
  return (
    <div className="main">
      <div className="main-fixed">
        <div id="title">
          <h2>SFI</h2>
        </div>
        <Navbar />
        <Scoreboard getTodaysGames={props.getTodaysGames} getYesterdaysGames={props.getYesterdaysGames} />
        <div>
          {/* <button onClick={props.getAllPlayersBdl}>PLAYERS Bdl</button>
        <button onClick={props.getPlayersNba}>PLAYERS Nba</button> */}
        </div>
      </div>
    </div>
  );
};