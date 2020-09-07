import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../constants/authConstatns';

const signIn = (contact) => {
    return {
        type: SIGN_IN,
        payload: contact,
    }
}


const signUp = (contact) => {
    return {
        type: SIGN_UP,
        payload: contact,
    }
}


const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}

export { signIn, signUp, signOut };