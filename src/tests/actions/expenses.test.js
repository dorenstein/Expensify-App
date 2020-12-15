import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('should setup rem,ove expense action object', () => {
    const action = removeExpense({id: '123abd'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abd'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abd',
                                {note: "this is a test"});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abd',
        updates: {
        note: "this is a test"
        }
    })
})

test('should setup add expense action object with values', () => {

    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'What a gouge'
    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup edit expense action object with defaults', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
    }
            
    })
})





