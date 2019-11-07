import React from 'react';
import './goalCard.scss';
import moment from 'moment';

const GoalCard = props => {
    // console.log('GoalCards', props.goal);
    return (
        <div className='text-container'>
            <h6>Start Date: {moment(props.startDate).format('MMM Do')}</h6>
            <>
                Met Goal? <input type='checkbox' checked='checked'></input>
            </>
            <div className='arrow collapsed'>
                <i className='fa fa-fw fa-chevron-down'></i>
                <i className='fa fa-fw fa-chevron-up'></i>
            </div>
            <p>{props.goal}</p>
        </div>
    );
};

export default GoalCard;
