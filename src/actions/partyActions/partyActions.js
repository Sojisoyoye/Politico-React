import Util from '../../utils';
// import { signoutUser } from '../authActions/authActions';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_PARTY_DATA = 'FETCH_PARTY_DATA';

export const getParties = () => async dispatch => {
    try {
        const { data } = await Util.reqProcess('/parties');

        dispatch({
            type: FETCH_PARTY_DATA,
            payload: data 
        })
    } catch (err) {
        const { error, message } = err.response.data;
        console.log(error);
        console.log(message);
    }
};
