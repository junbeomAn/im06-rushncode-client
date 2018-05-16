import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const LikeCount = ({ count }) => (
  <div className="CountBox">
    <div className="CountBoxImage">
      <Icon name="heart" size="big" />
    </div>
    <div className="CountBoxNum">{count}</div>
  </div>
);

LikeCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LikeCount;
