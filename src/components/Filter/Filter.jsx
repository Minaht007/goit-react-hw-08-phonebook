import { useDispatch, useSelector } from 'react-redux';

import { Div, Input, Span } from './Filter.styled';
import { filterContacts } from 'redux/filter/slice';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const contactSearch = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <Div>
      <label>
        <Span>Find contacts by name:</Span>
        <Input type="text" value={value} onChange={contactSearch} />
      </label>
    </Div>
  );
};
