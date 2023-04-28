import PropTypes from 'prop-types';
import { RotatingLines, ThreeCircles } from 'react-loader-spinner';

import { Wrapper } from './Loading.styled';

export const Loading = ({ visible }) => {
  return (
    <Wrapper>
      <div>
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={visible}
        />
      </div>
    </Wrapper>
  );
};

export const LoadingUser = () => {
  return (
    <Wrapper>
      <ThreeCircles
        height="150"
        width="150"
        color="#66fcf1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Wrapper>
  );
};

Loading.propTypes = {
  visible: PropTypes.bool.isRequired,
};
