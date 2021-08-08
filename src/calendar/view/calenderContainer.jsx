import React from 'react';
import './calenderContainer.css';
import {Quarter} from "./quarter";
import {getEventWithOverlapCounts} from "../../service/calenderService";

const backgroundColors = ['purple', 'red', 'green', 'blue', 'orange'];
export class CalenderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {events: []};
    }

    componentDidMount() {
        const events = getEventWithOverlapCounts();
        this.setState(prev => ({...prev, events}))
    }

    render() {
        const {events} = this.state;
        const columns = events.reduce ((prev, e) => {
            return e.overlapCount > prev ? e.overlapCount : prev
        }, 0);
        const gridTemplateColumns = `100px repeat(${Math.max(columns,  1)}, 1fr)`;
        return (
            <div className={'calenderContainer'} style={{gridTemplateColumns: gridTemplateColumns}}>
                {
                    [...Array(48)].map((x, index) => {
                        const minutes = ((index) * 15) + 540;
                        return <Quarter key={index} minutes={minutes}/>
                    })
                }
                {
                    events && events.map((ev, index) => {
                        const colStart = 2;
                        const colEnd = columns + 2;
                        const {_start: start, _end: end, overlapCount, underlapCount} = ev;
                        const gridRowStart = (Math.floor(start.totalMinutes / 15) - 35);
                        const gridRowEnd = ( Math.floor(end.totalMinutes / 15) - 35);
                        let gridColumnStart = colStart + underlapCount;
                        const gridColumnEnd = colEnd - overlapCount;
                        const backgroundColor = backgroundColors[underlapCount];

                        return (
                            <div key={index} className={'event'} style={{gridRowStart, gridRowEnd, gridColumnStart, gridColumnEnd, backgroundColor}}>
                                {ev._subject}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}