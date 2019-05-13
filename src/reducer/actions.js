

import constants from './constants.js';

const {
    LOAD_RECORD,
    LOAD_RECORD_SUCCESS,
    LOAD_RECORD_ERROR,
    LOAD_RECORDS,
    LOAD_RECORDS_SUCCESS,
    LOAD_RECORDS_ERROR
} = constants();

function loadRecord(id) {
    return {
        type: LOAD_RECORD,
        id,
    };
}

function loadRecordSuccess(record) {
    return {
        type: LOAD_RECORD_SUCCESS,
        record,
    };
}  

function loadRecordError(error) {
	
    return {
        type: LOAD_RECORD_ERROR,
        error,
    };
}


function loadRecords() {
    return {
        type: LOAD_RECORDS,
    };
}

function loadRecordsSuccess(records) {
    return {
        type: LOAD_RECORDS_SUCCESS,
        records,
    };
}

function loadRecordsError(error) {
    return {
        type: LOAD_RECORDS_ERROR,
        error,
    };
}


export default {
    loadRecord,
    loadRecordSuccess,
    loadRecordError,
    loadRecords,
    loadRecordsSuccess,
    loadRecordsError
};

