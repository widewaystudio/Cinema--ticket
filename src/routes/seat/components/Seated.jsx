import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeSeat } from '../actions';
import './Seated.css';

const Seated = ({ data,onRemove }) => {

  if(!data.length){
    return null;
  }

    return (
      <div className="Seated">
        <ul className="Seated__list">
          {
            data.map(seat => (
              <li key={seat.id} className="Seated__item movieTicket">
                <div className="movieTicket__detail">
                  <div className="movieTicket__pos">{`${seat.rowIndex}排${seat.colIndex}座`}</div>
                  <div className="movieTicket__price"><i className="movieTicket__tag">卡</i>33元</div>
                </div>
                <div className="movieTicket__close" onClick={() => onRemove(seat.id)}/>
              </li>
            ))
          }

        </ul>
        <div className="Seated__buy">{data.length * 33}元 确认选座</div>
      </div>
    );

};

Seated.propTypes = {
  data:PropTypes.array.isRequired,
  onRemove:PropTypes.func.isRequired
};

const mapStateToProps = state =>{
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => {
      dispatch(removeSeat(id))
    }
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(Seated);
