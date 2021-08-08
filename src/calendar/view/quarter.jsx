import React from 'react';
import './quarter.css';
import {EventTime} from "../model/EventTime";

export function Quarter (props) {
    const {minutes} = props;
    const eventTime = new EventTime(minutes);
    return (
        <div className={'quarter'}>
            <span className={'content'}>{eventTime.toString()}</span>
        </div>
    )
}