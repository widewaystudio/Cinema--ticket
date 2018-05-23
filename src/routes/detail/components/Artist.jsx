import React from 'react';
import PropTypes from 'prop-types';
import './Artist.css';

/**
 * 详情页演职员表
 * @ date 2018-05-18
 * @returns {XML}
 * @constructor
 */

const Artist = ({ data }) => {
  return (

    <div className="artist">
      <ul className="artist__list">
        {
          data.map(item =>(
            <li key={item.image}><a href="" className="artistInfo">
              <div className="artistInfo__image" style={{backgroundImage: "url(./source/movie/asset4.jpeg)"}} />
              <div>
                <dl className="artistInfo__name">{item.name}</dl>
                <dd className="artistInfo__job">{item.job}</dd>
              </div>
            </a></li>
          ))
        }

      </ul>

    </div>
  );
};

Artist.propTypes = {
 data:PropTypes.array.isRequired
};

export default Artist;
