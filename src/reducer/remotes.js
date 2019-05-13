import api from '../api';
import actions from './actions';


function remotes(name, dispatch) {
    dispatch(actions.loadRecords());
    api.get(name).then(res => dispatch(actions.loadRecordsSuccess(res.data))).catch(error => dispatch(actions.loadRecordsError(error)));
}

export default remotes;
