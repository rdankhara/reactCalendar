import {Event} from "../../../calendar/model/event";

describe('Event', ()=> {
    let event = new Event(160, 200, 'test');
    beforeEach(() => {

    });

    it('initialises event', () => {
        expect(event.start.totalMinutes).toBe(160);
        expect(event.end.totalMinutes).toBe(200);
        expect(event.subject).toBe('test');
    })

})