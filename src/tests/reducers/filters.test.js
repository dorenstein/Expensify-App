import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set up sortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set up sortby to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set up filter by text default', () => {
    const currentState = {
        text: 'Hi There',
        sortBy: undefined,
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState, {type: 'SET_TEXT_FILTER',
    text: ''});
    expect(state.text).toBe('');
});

test('should set up filter by text value', () => {
    
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER',
    text: 'Hi there'});
    expect(state.text).toBe('Hi there');
});

test('should set up filter by startDate', () => {
    
    const state = filtersReducer(undefined, {type: 'SET_START_DATE',
    startDate: moment(0)});
    expect(state.startDate).toEqual(moment(0))
});

test('should set up filter by endDate', () => {
    
    const state = filtersReducer(undefined, {type: 'SET_END_DATE',
    endDate: moment(0)});
    expect(state.endDate).toEqual(moment(0))
});
