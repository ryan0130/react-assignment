import React from 'react';
import Navigation from './navigation'

let e = React.createElement;

export default class Login extends React.Component {
    render () {
        return (
            <div>
                <Navigation />
                <div className="auth-body-form">
                    <form className="auth-form">
                        <div>
                            <h3 className="auth-form-title">Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Username</label>
                                <input type="username" className="form-control mt-1" placeholder="Enter Username"/>   
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input type="password" className="form-control mt-1" placeholder="Enter Password"/>
                            </div>
                            <div className="d-grip gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div>
                                <p className="forgot-password text-right mt-2"><a href="#">Forgot password?</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}