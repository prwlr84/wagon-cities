import React, { Component } from 'react';

class City extends Component {
  render(){
    console.log(this.props.city.name)
    return(
      <div className="card-trip">
        <img src="https://picsum.photos/200/300" />
        <div className="card-trip-infos" style={{color: '#0099ff'}}>
          <div>
            <h2>{this.props.city.name}</h2>
            <p>{this.props.city.address}</p>
          </div>
          <h2 className="card-trip-pricing" style={{opacity: '0.2'}}>{this.props.city.slug}</h2>
          <img src="https://kitt.lewagon.com/placeholder/users/prwlr84" className="card-trip-user avatar-bordered" />
        </div>
      </div>
    )
  }
}

export default City;
