import React from 'react';
import ProTypes from "prop-types"
import "./TopBar.css";

const TopBar = ({city, showCityLayer}) => {
  return (
    <div className="topBar">
      <div className="topBar__city" onClick={showCityLayer}>{city}</div>
      <div className="topBar__search">搜索</div>
      <div className="topBar__scan"></div>
    </div>
  );
};

TopBar.proTypes = {
  city:ProTypes.string.isRequired,
  showCityLayer:ProTypes.func.isRequired,
}
export default TopBar;

