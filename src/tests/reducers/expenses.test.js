import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('should add an expense', () => {
    const expense = {
        id: 10000,
        description: 'Ball Game',
        note: '',
        amount: 30000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state[state.length-1].description).toBe(expense.description);
});

test('should edit expense by id', () => {
    const description = 'Dine Out'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(description);
});

test('should not edit expense if id not found', () => {
    const description = 'Dine Out'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '23',
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
