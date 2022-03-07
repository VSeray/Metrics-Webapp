import React from 'react';
import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import '../styles/EFTs.css';

const Loading = ({ body }) => (
  <ul className={`${body} loading`}>
    <li>
      <RotatingLines type="ThreeDots" color="var(--text-color)" height={50} width={50} />
    </li>
  </ul>
);

Loading.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Loading;
