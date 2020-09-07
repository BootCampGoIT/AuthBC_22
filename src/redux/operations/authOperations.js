import axios from 'axios';
import { loaderOn, loaderOff } from '../actions/loaderActions';
import { signIn, signUp, signOut } from '../actions/authActions';
import {setError} from '../actions/errorActions';

const API_KEY = "AIzaSyAq6sNhq-w8DHSaQukA2ZUfQwt3-i9vBH8";

const methods = {
    signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
}

export const register = (userData) => (dispatch) => {
dispatch(loaderOn())
axios.post(methods.signUp, userData)
.then(res => dispatch(signUp({token: res.data.idToken, email: res.data.email,})))
.catch(error => dispatch(setError(error)))
.finally(() => dispatch(loaderOff()));

}








