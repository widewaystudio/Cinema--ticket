import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import request from '../../helpers/request';
import BaseInfo from './components/BaseInfo';
import Score from './components/Score';
import CollText from '../../components/CollText';
import Artist from './components/Artist';
import Comment from './container/Comment';
import LineLink from '../../components/LineLink';
import { Link } from 'react-router-dom';
import ImageSlider from './container/ImageSlider';
import './index.css';

class Detail extends Component {

  state = {
    artist: [],
    showImage: false
  }
  componentDidMount() {
    this.getArtist();
  }
 getArtist = async () => {
    const data = await request('/artist');
    if(data && data.length){
      this.setState({
        artist: data
      });

    }
 }

 toggleImage = () => {
    this.setState({
      showImage: !this.state.showImage
    });


 }

  render(){
    const { artist } = this.state;

  return (
    <div className="detail">
      <div className="detail__top">
        <div className="tOperator">
          <div className="tOperator__icon tOperator__icon--back" onClick={() => {window.history.back();}}></div>
          <div className="tOperator__icon tOperator__icon--share"></div>
        </div>
        <BaseInfo onShowImage={this.toggleImage}></BaseInfo>
      </div>
       <div className="detail__content">
         <section className="detail__module">
           <Score />
         </section>
         <section className="detail__module">
           <CollText height={84}>
             <div className="detail__overview">
               唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘展开,两人却发现了隐藏在这次挑战背后的更大秘,于是一场搞笑，惊险的旅行就这样开启了，期待你的光临影院，一起开启冒险吧
             </div>
           </CollText>

         </section>
         <section className="detail__module">
           <h3 className="detail__mTitle">演职员表</h3>
           <Artist data={artist}/>
         </section>
         <section className="detail__module">
           <h3 className="detail__mTitle">观众热评</h3>
           <Comment />
         </section>
         <section className="detail__module">
           <h3 className="detail__moduleTitle">影片资料</h3>
           <div>
             <LineLink title="幕后花絮" href="#" />
             <LineLink title="台词精选" href="#"></LineLink>
             <LineLink title="出品发行"  href="#"></LineLink>
           </div>

         </section>
       </div>
      <Link to='/seat' className="detail__buyBtn">选座购票</Link>
      { this.state.showImage && <ImageSlider onClose={this.toggleImage}/>}
    </div>
  );
 }
};

Detail.propTypes = {

};

export default Detail;
