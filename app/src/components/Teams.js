import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../actions'

const Teams = props => {

    useEffect(()=>{
        props.getTeams();   
    }, [])

    console.log(props.eastTeams, 'east teams')

    return (
        <div className='teams-box'>
            {props.isLoading && <p>LOADING TEAMS...</p>}
            {props.error && <p>{props.error}</p>}
            <div className='teams'>
                <div className='west-teams'>
                    <h3>WESTERN CONFERENCE</h3>
                    <div className='conf-box-west'>
                        {props.westTeams.map(team => (
                            
                                <div key={team.id} className='team-card'>
                                    <h4>{team.abbreviation}</h4>
                                    <p>{team.full_name}</p>
                                    <p>Division: {team.division}</p>
                                </div>
                            
                        ))}
                    </div>
                </div>
                <div className='east-teams'>
                    <h3>EASTERN CONFERENCE</h3>
                    <div className='conf-box-east'>
                        {props.eastTeams.map(team => (
                            <div key={team.id} className='team-card'>
                                <h4>{team.abbreviation}</h4>
                                <p>{team.full_name}</p>
                                <p>Division: {team.division}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        eastTeams: state.eastTeams,
        westTeams: state.westTeams
    }
}



export default connect(mapStateToProps, { getTeams })(Teams);

