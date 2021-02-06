import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () =>{
   this.props.setActiveCity(this.props.city);
  }

  render(){
    return(
      <div className="card-trip" onClick={this.handleClick}>
        <div className="card-trip-infos" style={{color: '#0099ff'}}>
          <div>
            <h2>{this.props.city.name}</h2>
            <p>{this.props.city.address}</p>
          </div>
          <img src="https://kitt.lewagon.com/placeholder/users/prwlr84" className="card-trip-user avatar-bordered" />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setActiveCity: setActiveCity },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
 activeCity: state.activeCity
 };
}
export default connect(mapStateToProps, mapDispatchToProps)(City);
