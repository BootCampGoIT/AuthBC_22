import React from 'react';
import authActions from '../actions/authActions';
import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../constants/authConstatns';

const initialState = {
    email: "",
    token: "",
}

export default (state = { ...initialState }, { type, payload }) => {

    switch (type) {
        case SIGN_IN:
            return { ...state, ...payload }

        case SIGN_UP:
            return { ...state, ...payload }

        case SIGN_OUT:
            return { ...initialState }

        default:
            return state;
    }


}