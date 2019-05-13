
import constants from './constants.js';

const initialState = {
    loading: false,
    error: false,
    lastUpdate: null
}

const reducer = (state = initialState, {type, records, record, id, error }) => {
    const {
        LOAD_RECORD,
        LOAD_RECORD_SUCCESS,
        LOAD_RECORD_ERROR,
        LOAD_RECORDS,
        LOAD_RECORDS_SUCCESS,
        LOAD_RECORDS_ERROR
    } = constants();

    switch(type){
        case LOAD_RECORDS:
            return { ...state, loading: true }
        case LOAD_RECORDS_SUCCESS:
            return { ...state, loading: false, error: false, records: records }
        case LOAD_RECORDS_ERROR:
            return { ...state, loading: false, error: 'Unable to load data. Please try again later' }    
        case LOAD_RECORD:
            return { ...state, loading: true}
        case LOAD_RECORD_SUCCESS:
            return { ...state, loading: false, error: false, record: record, id: id }  
        case LOAD_RECORD_ERROR:
            return { ...state, loading: false, error: 'Unable to load data. Please try again later' }
        default: 
            return state    
    }
}

export default reducer;
