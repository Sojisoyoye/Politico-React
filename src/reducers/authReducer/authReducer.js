import { USER_SIGNUP_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_SIGNUP_ERROR } from '../../actions/authActions/authActions';

const token = localStorage.getItem('token');

const initialState = {
    isAuthenticated: Boolean(token),
    isAdmin: 'false',
    loginErrors: [],
    signupErrors: []
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_SIGNUP_SUCCESS: 
            return { ...state, ...payload }
        case USER_SIGNUP_ERROR:
            return { ...state, signupErrors: [...payload] }
        case USER_LOGIN_ERROR:
            return { ...state, loginErrors: [...payload] };
        case USER_LOGIN_SUCCESS:
            return { ...state, ...payload };
        default:
            return state;
    }
}

export default authReducer;
