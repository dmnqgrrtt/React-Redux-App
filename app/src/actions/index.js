import axios from 'axios';

export const getTeams = () => dispatch => {
    dispatch({type: 'GET_TEAMS_START'})
    axios.get('https://www.balldontlie.io/api/v1/teams')
        .then(res => {
            console.log('teams', res.data.data)
            dispatch({type: 'GET_TEAMS_SUCCESS', payload: res.data.data})
        })
        .catch(err => {
            console.log('error', err)
            dispatch({type: 'GET_TEAMS_FAIL'})
        })
}