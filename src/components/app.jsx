import React, { Component } from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../components/active_city';

class App extends Component {
  render(){
    return(
    <div className='city-list row'>
      <CityList />
      <ActiveCity />
    </div>
    )
  }
}

export default App;
