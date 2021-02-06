import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {
  handleClick = () =>{
   this.props.selectFlat(this.props.city);
  }

  render(){
    return(
      <div className="card-trip" onClick={this.handleClick}>
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

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { selectCity: selectCity },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
 selectedCity: state.selectedCity
 };
}
export default connect(mapStateToProps, mapDispatchToProps)(City);
