import React from 'react'

export default class Test1 extends React.Component {
  getUsers = (e) => {
    e.preventDefault()
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
  render() {
    return (
      <div>
        <form onSubmit={this.getUsers}>
          <button type="submit"> Hello </button>
        </form>
      </div>
    );
  }
}