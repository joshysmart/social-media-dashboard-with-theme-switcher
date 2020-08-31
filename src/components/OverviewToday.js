import React from 'react';
import OverviewTile from './OverviewTile.js';

function OverviewToday(props) {
 const style = {
  color: props.state.checked ? '#fff' : ''
 }

 return (
  <div className="overview-container" >
   <h2 style={style}>Overview - Today</h2>
   <div className="overview-tile-container">
    <OverviewTile
     type={'Page Views'}
     icon={'./img/icon-facebook.svg'}
     count={87}
     arrow={{ icon: './img/icon-up.svg', up: true }}
     percent={'3%'}
     state = {props.state} 
    />
    <OverviewTile
     type={'Likes'}
     icon={'./img/icon-facebook.svg'}
     count={52}
     arrow={{ icon: './img/icon-down.svg', up: false }}
     percent={'2%'}
     state = {props.state} 
    />
    <OverviewTile
     type={'Likes'}
     icon={'./img/icon-instagram.svg'}
     count={5462}
     arrow={{ icon: './img/icon-up.svg', up: true }}
     percent={'2257%'}
     state = {props.state} 
    />
    <OverviewTile
     type={'Profile Views'}
     icon={'./img/icon-instagram.svg'}
     count={'52k'}
     arrow={{ icon: './img/icon-up.svg', up: true }}
     percent={'1375%'}
     state = {props.state} 
    />
    <OverviewTile
     type={'Retweets'}
     icon={'./img/icon-twitter.svg'}
     count={'117'}
     arrow={{ icon: './img/icon-up.svg', up: true }}
     percent={'303%'}
     state = {props.state} 
    />
    <OverviewTile
     type={'Likes'}
     icon={'./img/icon-twitter.svg'}
     count={'507'}
     arrow={{ icon: './img/icon-up.svg', up: true }}
     percent={'507%'}
     state = {props.state} 
    />
    <OverviewTile
     type={'Likes'}
     icon={'./img/icon-youtube.svg'}
     count={'107'}
     arrow={{ icon: './img/icon-down.svg', up: false }}
     percent={'19%'}
     state = {props.state} 
    />
    <OverviewTile
     type={'Total Views'}
     icon={'./img/icon-youtube.svg'}
     count={'1407'}
     arrow={{ icon: './img/icon-down.svg', up: false }}
     percent={'12%'}
     state = {props.state} 
    />
   </div>
  </div>
 )
}

export default OverviewToday;
