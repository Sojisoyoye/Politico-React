import Util from '../../utils';

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_FAILED';
export const CLEAR_LOGIN_ERRORS = 'CLEAR_LOGIN_ERRORS';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';

export const userSignupError = (error, message) => ({
    type: USER_SIGNUP_ERROR,
    payload: error ? [...error] : [message]
});

export const userLoginError = (error, message) => ({
    type: USER_LOGIN_ERROR,
    payload: error ? [...error] : [message]
});

export const clearLoginErrors = () => ({ type: CLEAR_LOGIN_ERRORS });

export const signupUser = userData => async dispatch => {
    try {
        const options = {
            method: 'POST',
            body: userData
        };

        const userResponse = await Util.reqProcess('/auth/signup', options);

        const { data } = userResponse;

        const { token } = data[0];

        localStorage.setItem('token', token);

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: { isAuthenticated: true }
        })
    } catch (err) {
        const { error, message } = err.response.data;
        dispatch(userSignupError(error, message));
    }
}

export const signinUser = userData => async dispatch => {
    try {
        const options = {
            method: 'POST',
            body: userData
        };

        const userResponse = await Util.reqProcess('/auth/login', options);

        const { data } = userResponse;

        const { token, user } = data[0];

        localStorage.setItem('token', token);

        localStorage.setItem('isAdmin', user.isadmin);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: { isAuthenticated: true, isAdmin: user.isadmin }
        })

    } catch (err) {
        const { error, message } = err.response.data;
        dispatch(userLoginError(error, message));
    }
}

export const signoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    return {
        type: USER_SIGN_OUT,
        payload: { isAuthenticated: false }
    }
}
