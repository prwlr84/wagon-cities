import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render(){
  if (this.props.activeCity === null){
    return(<div className="active col-sm-8" style={{height: '100vh'}}><h1>Select location!</h1> </div>)
  } else {
    return(
      <div className="active col-sm-8" style={{height: '100vh'}}>
        <div>
          <h2>{this.props.activeCity.name}</h2>
          <h4>{this.props.activeCity.address}</h4>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt="" />
        </div>
      </div>
    )
  }
}}


function mapStateToProps(state) {
 return { activeCity: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);;
