import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import request from '../../../helpers/request';
import ScoreDist from '../components/ScoreDist';
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';

class Comment extends Component {
      state = {
        tags : [],
        comments: [],
        current:'' //当前选中的标签
      }


  componentDidMount() {
    this.getData();
  }

  getData = async () => {
        const { tags, list } = await request('/comment');

        this.setState({
          tags,
          comments: list,
          current: tags[0] ? tags[0].text : ''
        });
    }

    changTag = value => {
         this.setState({
            current: value
          });

          }

  toggleZan = id =>{
      this.setState((prevState) => ({
        comments: prevState.comments.map(comment =>{
          if(comment.id === id){
            return {
              ...comment,
              isZan: !comment.isZan,
              zan: comment.isZan ? --comment.zan : ++comment.zan
            };
          }
          return {...comment};
        })
      }));

  }

  render() {
        const { tags,comments,current } = this.state;
        const filterComments = comments.filter(comment =>comment.tag === current );
    return (
      <div className="comment">
        <ScoreDist />
        <TagList data={tags} current={current} onClick={this.changTag}/>
        <CommentList data={filterComments} onClickZan={this.toggleZan}/>

      </div>
    );
  }
}

Comment.propTypes = {};

export default Comment;
