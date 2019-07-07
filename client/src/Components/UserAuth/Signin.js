import React, { Component } from 'react';
import SignInSide from './SignInSide';
import { Redirect } from 'react-router-dom';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            success: false,
            status: null,
            error: null,
            loggedin: false,
            userProfile: {}
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        var obj = {};
        formData.forEach((value, key) => { obj[key] = value });
        var json = JSON.stringify(obj);
        console.log(obj);
        fetch('http://localhost:3001/getUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: json
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data.success) {
                    //TODO: Email is incorrect, try again, no user found
                    this.setState({ error: data.error })
                    // console.log(data.error);
                }
                if (data.error) {
                    //TODO:Password is incorrect
                    this.setState({ error: data.error })
                    console.log(data.error);
                }
                if (data.success) {
                    this.setState({ success: data.success, status: data.status, loggedin: data.loggedin, userProfile: data.userProfile });
                    data.userProfile.loggedin = true;
                    localStorage.setItem('currentActiveUserProfile', JSON.stringify(data.userProfile));
                }
            }
            );
    }

    render() {
        return (
            (this.state.loggedin) ? <Redirect to="/Dashboard" /> : <SignInSide onRegister={this.handleSubmit} />
        )
    }
}