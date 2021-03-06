import React from "react";
import {connect} from 'react-redux';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.action"


import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        email:'',
        password:''
    }
    }

    handleSubmit = async e=>{
        e.preventDefault();
        const {emailSignInStart} = this.prop;
        const {email, password} = this.state;

            emailSignInStart(email,password);
    };

    handleChange = e =>{
        //console.log(e.target);
        const {value,name} = e.target;
        this.setState({[name]:value})
    };


    render(){
        const {googleSignInStart} = this.props;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput type="password" name="password" value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                    <div className="buttons">
                        <CustomButton type='submit'> Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);
