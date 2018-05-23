import React from 'react';
import PropTypes from 'prop-types';
import "./LineLink.css";

const LineLink =({ href,title,extra}) => {
  return (
    <a href={href} className="lineLink">
      <span className="lineLink__title">{title}</span>
      {extra && <span className="lineLink__extra">{extra}</span>}
      <li className="lineLink__arrow" />
    </a>
  );
};

LineLink.propTypes = {
  href:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  extra:PropTypes.string

};

export default LineLink;
