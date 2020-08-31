import React from 'react';
import SocialMediaDashboard from './SocialMediaDashboard.js';
import OverviewToday from './OverviewToday.js';

function AppContainer(props) {
 const style = {
  background: props.state.checked ? '#1e202a' : '#ffffff'
 }

 return (
  <div className="conatiner"  style={style}>
   <SocialMediaDashboard 
   handleChange={props.handleChange}
   state={props.state}
   />
   <OverviewToday 
   state = {props.state} 
   />
  </div>
 )
}

export default AppContainer;