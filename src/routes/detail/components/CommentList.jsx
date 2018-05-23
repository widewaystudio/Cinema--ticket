import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../../components/star';
import CollText from '../../../components/CollText';
import './CommentList.css';

const CommentList = ({ data,onClickZan }) => {

  return (
    <div>
      {
        data.map(comment => (
          <div className="commpentList" key={comment.id}>
            <div className="clistuser">
              <div className="clistuser__avatar" style={{backgroundImage:'url(/source/default-avatar.jpg'}}> </div>
              <div className="clistuser__detail">
                <div className="clistuser__name">{comment.name}</div>
                <div className="clistuser__score"><Star value={comment.score} size={15} /><span className="clistuser__value">{comment.score}</span></div>
              </div>
            </div>
            <CollText>
              {comment.content}
            </CollText>

            <div className="commpentList__detail">
              <div className="commpentList__time">{comment.time}</div>
              <div className={`commpentList__zan ${comment.isZan && 'commpentList__zan--active'} `}><i onClick={() => onClickZan(comment.id)}></i> {comment.zan}</div>
            </div>
          </div>
        ))
      }

    </div>
  );
};

CommentList.propTypes = {
  data: PropTypes.array.isRequired,
  onClickZan: PropTypes.func.isRequired

};

export default CommentList;
