import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './CollText.css';



class CollText extends Component {
  state = {
    isCollapse:false,
    isNeedC:false
  }
  static defaultProps = {
    height:84
}

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    const value = this.props.height ;


    if(dom.clientHeight > value){
      this.setState({
        isCollapse: true,
        isNeedC: true
      });
    }
  }

  taggleStatus = () =>{
    if(this.state.isNeedC){
      this.setState((prevState) =>({
        isCollapse: !prevState.isCollapse
      }));
    }
  }

  render(){
    const { isCollapse } = this.state;
    const cls = isCollapse ? 'collText--collapse' : '';
    const maxHeight = isCollapse ? this.props.height : 'none';

    return(
      <div className={`collText ${cls}`} style={{maxHeight: maxHeight}} onClick={this.taggleStatus}>
        {this.props.children}
        {this.state.isCollapse && <div className="collText__label">展开</div>}
      </div>
    );
}
}

CollText.propTypes ={
  children:PropTypes.any,
  height: PropTypes.number

};

export default CollText;





