import React from 'react';
import Star from '../../../components/star';
import './Score.css';

const Score = () => {
  return (
    <div className="score">
      <div className="score__top">
        <div className="topItem">
          <div className="topItem__value">9.3 <Star value={9.3}/></div>
          <div className="topItem__title">观众评分 12313人</div>
        </div>
        <div className="topItem">
          <div className="topItem__value">83%</div>
          <div className="topItem__title">V淘推荐度</div>
        </div>
        <div className="topItem">
          <div className="topItem__value">71787</div>
          <div className="topItem__title">想看人数</div>
        </div>
      </div>
      <div className="scoreBtn">
        <button className="scoreBtn__item scoreBtn__item--want"><i />想看</button>
        <button className="scoreBtn__item scoreBtn__item--seen"><i />看过</button>

      </div>

    </div>
  );
};

export default Score;
