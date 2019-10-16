import axios from 'axios';

//clientActions

import {
    GET_CLIENTS_START,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    ADD_CLIENT,
    DELETE_CLIENT,
    CLIENTS_ERROR,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE
} from './types';

const headers = { 'Content-Type': 'application/json' };

//`https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/${match.params.clientid}?api_key=keyfahybUIpBkegFv`

export const getClientInfo = props => dispatch => {
    dispatch({ type: GET_CLIENTS_START });
    axios
        .get(
            `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/${props.match.params.clientid}?api_key=keyfahybUIpBkegFv`
        )
        .then(res => {
            console.log('actions', res.data);
            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err
            });
        });
};

export const updateMetric = (id, metricUpdate) => dispatch => {
    // debugger;
    console.log('hello', metricUpdate);
    dispatch({ type: UPDATE_METRIC_START });
    axios

    

        .patch(
            `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Outcomes?api_key=keyHl8AuDrb2mt77E`,
            metricUpdate,
            { headers: headers }
        )
        .then(res => {
            console.log('UPDATED METRIC', res);
            dispatch({
                type: UPDATE_METRIC_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: UPDATE_METRIC_FAILURE,
                payload: err.message
            });
        });
};
