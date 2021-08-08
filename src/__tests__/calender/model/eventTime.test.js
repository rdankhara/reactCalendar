import {EventTime} from "../../../calendar/model/EventTime";

describe('EventTime', ()=> {
    const eventTime = new EventTime(160);
    it('initialises all properties', () => {
        expect(eventTime.hours).toBe(2);
        expect(eventTime.minutes).toBe(40);
        expect(eventTime.totalMinutes).toBe(160);
        expect(eventTime.toString()).toEqual('2:40 AM');
    })

    it.each([[500, '8:20 AM'], [720, '12:00 PM'], [1440, '0:00 AM']])('verify toString', (minutes, expectedString) => {
        const eventTime = new EventTime(minutes);
        expect(eventTime.toString()).toBe(expectedString);
    })
})