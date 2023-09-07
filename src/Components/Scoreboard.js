import React from 'react'

export const Scoreboard = (props) => {

    
    const current = new Date();
     const date = `${
       current.getMonth() + 1
     }/${current.getDate()}/${current.getFullYear()}`;
      const yesterday = `${current.getMonth() + 1}/${
        current.getDate() - 1
      }/${current.getFullYear()}`;
    
    const returnDate = () => {
        console.log(yesterday)
    }
  return (
    <div className="scoreboard">
      <div className="game-date">
        <select className="date-select" value="Game Date">
          <option value="value" selected>
            Game Date
          </option>
        </select>
      </div>
          <div className="game-list">
              <button onClick={props.getYesterdaysGames}>get todays games</button>
        {/* fetch games and teams and show games for the day here */}
      </div>
    </div>
  );
}