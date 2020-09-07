import React, { Component } from 'react';
import { register } from '../../redux/operations/authOperations';
import {connect} from 'react-redux';


const initialState = {
    email: "",
    password: "",
}

class Form extends Component {


    state = {
        ...initialState
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })


    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state)
    }



    render() {
        const { email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <label className='label'>Email:
                        <input name='email' value={email} type="text" className='input' onChange={this.handleChange} />
                </label>

                <label className='label'>Password:
                        <input name='password' value={password} type="text" className='input' onChange={this.handleChange} />
                </label>

                <button type='submit' className='button'>SignIn</button>

            </form>



        );
    }
}



export default connect(null, {register})(Form);