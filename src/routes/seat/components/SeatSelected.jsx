import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addSeat, removeSeat } from '../actions';

import {data} from '../mock/seat';

const SEAT_WIDTH = 50;
const SEAT_HEIGHT = 50;
let col = 1;
let row = 1;


const ratio = window.devicePixelRatio;
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;

 data.forEach(seat =>{
  if(seat.rowIndex > row){
    row = seat.rowIndex;
  }
  if(seat.colIndex > col){
    col = seat.colIndex;
  }
});

const CANVAS_WIDTH = col * SEAT_WIDTH;
const CANVAS_HEIGHT = row * SEAT_HEIGHT;
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio;
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio;

class SeatSelected extends Component {


  componentDidMount() {


    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.font = `${12 * ratio}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';





    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();
    let count = 0;
    const loadCallback = () => {
      count ++;
      if(count === 3){
        this.emptyImage = emptyImage;
        this.selectImage = selectImage;
        this.soldImage = soldImage;
        this.drawAllSeat();
      }

    };

    emptyImage.onload = loadCallback;
    selectImage.onload = loadCallback;
    soldImage.onload = loadCallback;

    emptyImage.src = './source/seat-empty.png';
    selectImage.src ='./source/seat-selected.png';
    soldImage.src = './source/seat-sold.png';




  }


  componentDidUpdate(prevProps, prevState) {
    this.ctx.clearRect(0, 0, DRAW_CANVAS_WIDTH, DRAW_CANVAS_HEIGHT);
    this.drawAllSeat();
    this.drawSelectSeat();
  }

  drawAllSeat = () => {
    const seatData = data;
    for (let i = 0; i < seatData.length; i++){
      const { isSold, xPos, yPos } = seatData[i];

      const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;

      if(isSold){
        this.ctx.drawImage(this.soldImage,offsetLeft,offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      }else{
        this.ctx.drawImage(this.emptyImage,offsetLeft,offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      }

    }

  }

  drawSelectSeat = () =>{
   const { selectSeat } = this.props;

   for(let i = 0; i < selectSeat.length; i++){
     const { xPos, yPos,rowIndex, colIndex } = selectSeat[i];

     const offsetLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
     const offsetTop = (yPos - 1) * DRAW_SEAT_HEIGHT;

     this.ctx.drawImage(this.selectImage,offsetLeft,offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
     this.ctx.fillText(`${rowIndex}排`,offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT * 2 / 5);
     this.ctx.fillText(`${colIndex}座`,offsetLeft + DRAW_SEAT_WIDTH / 2, offsetTop + DRAW_SEAT_HEIGHT * 2 / 3);
   }


  }


  clickSeat = (e) =>{
    const offset = this.refs.canvas.getBoundingClientRect();
    const clickX = e.pageX - offset.left;
    const clickY = e.pageY - 169;
    const xPox = Math.ceil(clickX / SEAT_WIDTH);
    const yPox = Math.ceil(clickY / SEAT_HEIGHT);

   const seat = data.find(seat => seat.xPos === xPox && seat.yPos === yPox);

      if(!seat || seat.isSold){
        return;
      }


      const seatIndex = this.props.selectSeat.findIndex(item => item.id === seat.id);

      if(seatIndex > -1){
        this.props.onRemove(seat.id);
      }else{
        if(this.props.selectSeat.length >= 4 ){
          alert("不能超过四个座位");
        }else{
          this.props.onAdd(seat);
        }
      }

  }

  render() {


    return (
     <canvas ref="canvas" onClick={this.clickSeat} style={{width:CANVAS_WIDTH,height: CANVAS_HEIGHT}} width={DRAW_CANVAS_WIDTH} height={DRAW_CANVAS_HEIGHT}></canvas>
    );
  }
}

SeatSelected.propTypes = {
  selectSeat: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd : PropTypes.func.isRequired
};


const mapStateToProps = state =>{
  return {
    selectSeat: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: seat => {
      dispatch(addSeat(seat));
    },
    onRemove: id => {
      dispatch(removeSeat(id));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SeatSelected) ;
