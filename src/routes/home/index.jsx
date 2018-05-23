import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import request from "../../helpers/request";
import TopBar from './components/TopBar';
import Slide from "./components/Slide";
import MovieItem from "./components/MovieItem";
import TabMenu from "../../components/TabMenu";
import CityLayer from "./components/CityLayer";
import RenderToBody from '../../components/RenderToBody';
import "./index.css";


class Home extends Component {

  state = {
    city:'',
    poster:[],
    movie:[],
    cityLayerVisible: false
  };

  showCityLayer = () =>{
    this.setState({
      cityLayerVisible: true
    });
  }

  hideCityLayer = () =>{
    this.setState({
      cityLayerVisible: false
    });
  }


  onChangCity = (city) =>{
    this.setState({
      city,
    });
    this.hideCityLayer();
  }


  componentWillMount(){
    this.getData();
  }

  getData = async() =>{
    const data = await request("/index");
    const { city, poster, movie} = data;
    this.setState({
      city,
      poster,
      movie
    });

  }

  render() {
    const { city, poster, movie,cityLayerVisible } = this.state;
    return (
      <div className="home">
        <TopBar city={city} showCityLayer={this.showCityLayer} />
        <div className="home__slide">
          <div className="home_slideWrap">
            <Slide data={poster}/>
          </div>
        </div>
        <div className="home__content">
          {
            movie.map(item => <Link key={item.name} to="/detail"><MovieItem  data={item} /></Link>)
          }

        </div>
        <div className="home__TabMenu">
          <TabMenu current="movie" />
        </div>
        {cityLayerVisible && <RenderToBody><CityLayer onClose={this.hideCityLayer} onSelect={this.onChangCity} /></RenderToBody>  }
      </div>

    );
  }
}

Home.propTypes = {};

export default Home;
