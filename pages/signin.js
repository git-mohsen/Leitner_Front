import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Cookies from 'universal-cookie';
import Head from 'next/head';


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }


    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit = () => {

        if (this.state.password.length < 6) {
            alert("Password is too short!");

        } else {

            fetch('http://localhost:3001/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
                .then(response => response.json())
                .then(response => {
                    if (response !== 0) {
                        const cookies = new Cookies();
                        cookies.set('leitner_token', response, {path: '/'});
                        Router.push('/profile', undefined, {shallow: true});


                    } else {
                        alert('Username or Password is Wrong');
                    }
                })
        }
    }


    render() {

        const cookies = new Cookies();
        const token = cookies.get('leitner_token');
        if (token != null && token.length > 0) {
            Router.push('/profile', undefined, {shallow: true});
        }

        return (
            <div>
                <Head>
                    <title>Sign In :: MziAshi</title>
                    <link href='/website.css' rel='stylesheet'/>
                </Head>

                <div className="container d-flex flex-column">
                    <div className="row align-items-center justify-content-center min-vh-100">
                        <div className="col-md-6 col-lg-5 col-xl-5 py-6 py-md-0">
                            <div className="card shadow zindex-100 mb-0">
                                <div className="card-body px-md-5 py-5">
                                    <div className="mb-5"><h6 className="h3">Sign In</h6>
                                        <p className="text-muted mb-0">Sign in to your account to continue.</p>
                                    </div>
                                    <span className="clearfix"></span>
                                    <form>
                                        <div className="form-group"><label className="form-control-label">Email address</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span></div>
                                                <input onChange={this.onEmailChange} type="email" className="form-control" id="input-email" placeholder="name@example.com"/></div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div><label className="form-control-label">Password</label></div>
                                                <div className="mb-2"><a href="#" className="small text-muted text-underline--dashed border-primary" data-toggle="password-text" data-target="#input-password">Show password</a></div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend"><span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg></span></div>
                                                <input onChange={this.onPasswordChange} type="password" className="form-control" id="input-password" placeholder="Password"/></div>
                                        </div>
                                        <div className="mt-4">
                                            <button onClick={this.onSubmit} type="button" className="btn btn-block btn-primary">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer px-md-5">
                                    <small>Not registered?</small>
                                    &nbsp;
                                    <Link href='/signup'>
                                        <a className="small font-weight-bold">Create account</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default SignIn