import {Event} from "../calendar/model/event";

const data = require('../staticData/events');

export const getEvents = () => {
    return data.map(x=> new Event(x.start, x.end, x.subject)).sort(Event.comparator);
}

export const getEventWithOverlapCounts = () => {
    const events = getEvents();
    const stateEvents = events.reduce((acc, current, index) => {
        let overlapCount = 0, underlapCount = 0;

        for(let i = index + 1; i < events.length; i++) {
            const next = events[i];
            if (next.start.totalMinutes >= current.start.totalMinutes && next.start.totalMinutes < current.end.totalMinutes) {
                overlapCount++;
            }
            else {
                break;
            }
        }

        for(let i = index - 1; i > 0; i--) {
            const prev = events[i];
            if (current.start.totalMinutes >= prev.start.totalMinutes && current.start.totalMinutes < prev.end.totalMinutes) {
                underlapCount++;
            }
            else {
                break;
            }
        }
        acc.push({...current, overlapCount, underlapCount})
        return acc;
    },[]);

    return stateEvents;
}