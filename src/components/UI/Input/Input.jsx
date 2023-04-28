import PropTypes from 'prop-types';

import { Input } from '../../ContactForm/ContactForm.styled';

export const InputElement = props => {
  return <Input {...props} />;
};

InputElement.protoType = {
  props: PropTypes.object.isRequired,
};
