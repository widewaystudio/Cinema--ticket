import React from 'react';
// import PropTypes from 'prop-types';
import Star from '../../../components/star';
import './ScoreDist.css';

const ScoreDist = props => {
  return (
    <div className="scoreDist">
      <div className="score">
        <div className="score__value">9.3分</div>
        <div className="score__desc">2480132 人评论</div>
      </div>
      <div className="dist">
        <div>
          <div className="dist__item">
            <Star value={10} size={8} />
            <div className="dist__btm">
              <div className="dist__top" style={{ width:'30%' }}></div>
            </div>
          </div>
          <div className="dist__item">
            <Star value={8} size={8} />
            <div className="dist__btm">
              <div className="dist__top" style={{ width:'60%' }}></div>
            </div>
          </div>
          <div className="dist__item">
            <Star value={6} size={8} />
            <div className="dist__btm">
              <div className="dist__top" style={{ width:'40%' }}></div>
            </div>
          </div>
          <div className="dist__item">
            <Star value={4} size={8} />
            <div className="dist__btm">
              <div className="dist__top" style={{ width:'60%' }}></div>
            </div>
          </div>
          <div className="dist__item">
            <Star value={2} size={8} />
            <div className="dist__btm">
              <div className="dist__top" style={{ width:'80%' }}></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

ScoreDist.propTypes = {

};

export default ScoreDist;
