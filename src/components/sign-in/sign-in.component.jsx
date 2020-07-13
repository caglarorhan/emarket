import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.components";
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        email:'',
        password:''
    }
    }

    handleSubmit = e=>{
        e.preventDefault();
        this.setState({email:'', password:''});
    };

    handleChange = e =>{
        console.log(e.target);
        const {value,name} = e.target;
        this.setState({[name]:value})
    };


    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput type="password" name="password" value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                    <CustomButton type='submit'> Sign In</CustomButton>

                </form>
            </div>
        )
    }
}
export default SignIn;
