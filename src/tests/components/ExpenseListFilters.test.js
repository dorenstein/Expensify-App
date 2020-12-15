import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from  '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}

        />
    );
});

test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sortByDate', () => {
    const value = 'date';
    wrapper.setProps({
        sortBy: 'amount'
    })   
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sortByAmount', () => {
    const value = 'amount';
      
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});


test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    // test for error by testing error state's length
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    
});

test('should handle focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    // test for error by testing error state's length
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);

    
});
// render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.props.filters.text}
//           onChange={this.onTextChange}
//         />
//         <select
//           value={this.props.filters.sortBy}
//           onChange={this.onSortChange}
//         >
//           <option value="date">Date</option>
//           <option value="amount">Amount</option>
//         </select>
//         <DateRangePicker
//           startDate={this.props.filters.startDate}
//           endDate={this.props.filters.endDate}
//           onDatesChange={this.onDatesChange}
//           focusedInput={this.state.calendarFocused}
//           onFocusChange={this.onFocusChange}
//           showClearDates={true}
//           numberOfMonths={1}
//           isOutsideRange={() => false}
//         />
//       </div>
//     );
//   }
// };