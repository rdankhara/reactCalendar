import {getEvents, getEventWithOverlapCounts} from "../../service/calenderService";
import {Event} from "../../calendar/model/event";

describe('calendarService', ()=> {
    describe('when getEvents invoked', () => {
        let events = [];
        beforeEach(() => {
            events = getEvents();
        })
        it('then returns events', () => {
            expect(events.length).not.toBe(0);
        })
    });

    describe('getOverlappedEvents', () => {
        it('builds events with overlap counts', () => {
            const events = getEventWithOverlapCounts();
        });
    })
})