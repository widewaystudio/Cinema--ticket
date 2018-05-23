import React from 'react';
import PropTypes from 'prop-types';
import './BaseInfo.css';
const BaseInfo = ({onShowImage }) => {
  return (
    <div className="baseInfo">
      <div className="baseInfo__detail">
        <h3 className="baseInfo__name">唐人街探案2</h3>
        <div className="baseInfo__sTitle">Detectie Chinatown 2</div>
        <ul className="baseInfo__other">
          <li>喜剧 / 动作 / 剧情 </li>
          <li> 中国大陆 | 130分钟 </li>
          <li>2018年2月大陆上映1</li>
        </ul>
      </div>
      <div className="baseInfo__poster" onClick={onShowImage} style={{backgroundImage:'url(/source/movie/asset4.jpeg)'}}/>

    </div>
  );
};

BaseInfo.propTypes = {
  onShowImage:PropTypes.func.isRequired
}
export default BaseInfo;
