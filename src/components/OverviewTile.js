import React from 'react';

function OverviewTile(props) {

 const style = {
  bg: {
   background: props.state.checked ? '#252a41' : '#f0f2fa',
  },
 
  head: {
   color: props.state.checked ? '#fff' : ''
  },
 
  p: {
   color: props.state.checked ? '#8e91ba' : ''
  }, 
  
  color: {
   color: props.arrow.up ? '#1db489' : '#dc414c'
  },
 }

 return (
  <div className="overview-tile" style={style.bg}>
   <p style={style.p} className="type">{props.type} <img src={props.icon} alt="" /></p>
   <div className="count">
    <h3 style={style.head}>{props.count}</h3>
    <p style={style.color}><img src={props.arrow.icon} alt="" /> {props.percent}</p>
   </div>
  </div>
 )
}


export default OverviewTile;