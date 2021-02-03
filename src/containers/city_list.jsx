import React, { Component } from 'react';
import City from './city'

class CityList extends Component {
  render(){
    return(
      <div className='city-list'>
        {this.props.cities.map(city => <City city={city} key={city.address}/>)}
      </div>
    )
  }
}

export default CityList;
