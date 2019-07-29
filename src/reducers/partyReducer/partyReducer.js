import { FETCHING_DATA, FETCH_PARTY_DATA } from '../../actions/partyActions/partyActions';

const initialState = {
    parties: [],
    isLoading: false
}

const partyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING_DATA:
            return { ...state, isLoading: payload };
        case FETCH_PARTY_DATA:
            return { ...state, parties: [...payload], isLoading: false };
        default:
            return state;
    }
};

export default partyReducer;