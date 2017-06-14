import { SHOW_ALL, SHOW_ATTENDING, SHOW_WITH_GUESTS } from './../actions/actions';

export function partyFilter(state = person => person, action) {
    switch (action.type) {
        case SHOW_ATTENDING:
            return person => person.attending;
        case SHOW_ALL:
            return person => person;
        case SHOW_WITH_GUESTS:
            return person => person.guests;
        default:
            return state;
    }
};
