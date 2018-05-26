import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const UpdateTime = ({ time }) => (
  <div>
    {moment(time)
      .startOf()
      .fromNow()}
  </div>
);

UpdateTime.propTypes = {
  time: PropTypes.string.isRequired,
};

export default UpdateTime;
