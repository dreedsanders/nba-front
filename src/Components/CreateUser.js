import React from 'react'

export default class CreateUser extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.createUser} class="forms" name="create-user-form">
                <label> Name </label>
                <input type="text" name="name" placeholder="Your name"></input>
                <br></br>
                <label> Password </label>
                <input type="text" name="password" placeholder="Your password"></input>
                <br></br>
                <label> Password </label>
                <input
                    type="text"
                    name="retype password"
                    placeholder="Retype your password"
                ></input>
                <br></br>
                <label> Password </label>
                <input type="text" name="photo" placeholder="Photo"></input>
                <br></br>
                <button type="submit">Create Account</button>
            </form>
        );
    }
}