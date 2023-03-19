import React from 'react'

const EditUser = () => {
  return (
    <div>
      <form
        className="forms"
        name="edit-user-form"
          >
              <h3>Edit Profile</h3>
              <br></br>
        <input type="text" name="name" placeholder="Name"></input>
        <br></br>
        <input type="text" name="password" placeholder="Password"></input>
        <br></br>
        <input
          type="text"
          name="Retype password"
          placeholder="Retype your password"
        ></input>
        <br></br>
        <input type="text" name="photo" placeholder="Photo"></input>
        <br></br>
        <button type="submit">Save Account</button>
      </form>
    </div>
  );
}

export default EditUser