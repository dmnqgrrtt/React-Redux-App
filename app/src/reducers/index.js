const initialState = {
    isLoading: false,
    error: '',
    eastTeams: [],
    westTeams: []
}

const rootReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'GET_TEAMS_START':
            return {
                ...state, 
                isLoading: true
            }
        case 'GET_TEAMS_SUCCESS':
            return {
                ...state,
                eastTeams: action.payload.filter(team => team.conference === 'East'),
                westTeams: action.payload.filter(team => team.conference === 'West'),
                isLoading: false,
                error: ''
                
            }
        case 'GET_TEAMS_FAIL':
            return {
                ...state,
                error: "There was an error, and we are unable to load NBA teams",
                isLoading: false

            }
        default: 
            return state;
    }
    
};

export default rootReducer;