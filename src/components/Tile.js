import React from 'react';

function Tile(props) {
 const style = {
  bg: {
   background: props.state.checked ? '#f0f2fa' : '#252a41'
  },

  before: {
   background: props.site === 'facebook' ? '#198ff5' : props.site === 'twitter' ? '#1ca0f2' : props.site === 'youtube' ? '#c4032a' : ''
  },

  head: {
   color: props.state.checked ? '' : '#fff'
  },

  p: {
   color: props.state.checked ? '#63687e' : '#8b97c6' 

  },

  color: {
   color: props.arrow.up ? props.site === 'facebook' ? props.state.checked ? '#1db489' : '' : '#1db489' : '#dc414c'
  },
 }

 return (
  <div className={`tile ${props.state.checked ? 'tile-dark' : ''}`} style={style.bg}>
   <div className="before" style={style.before}></div>
   <p className="username" style={style.p}><img src={props.icon} alt="" /> {props.username}</p>
   <h2 style={style.head}>{props.followers}</h2>
   <p className="followers" style={style.p}>{props.type}</p>
   <p style={style.color} 
   className={`date ${props.site === 'facebook' ? 'facebook' : ''}`} ><img src={props.arrow.icon} alt="" /> {props.today}</p>
  </div>
 )
}

export default Tile;