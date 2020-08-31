import React from 'react';
import Title from './Title.js';
import Tile from './Tile.js';

function SocialMediaDashboard(props) {
 return (
  <div className="social-media-container" >
    <Title 
    handleChange={props.handleChange}
    state = {props.state}
    />
   <div className="tile-container">
    <Tile
     icon={'./img/icon-facebook.svg'}
     username={'@nathanf'}
     followers={'1987'}
     type={'Followers'}
     arrow={{icon: './img/icon-up.svg', up: true}}
     today={'12 Today'}
     site={'facebook'}
     state = {props.state}
    />
    <Tile
     state = {props.state}
     icon={'./img/icon-twitter.svg'}
     username={'@nathanf'}
     followers={'1044'}
     type={'Followers'}
     arrow={{icon: './img/icon-up.svg', up: true}}
     today={'99 Today'}
     site={'twitter'}
    />
    <Tile
     state = {props.state}
     icon={'./img/icon-instagram.svg'}
     username={'@realnathanf'}
     followers={'11k'}
     type={'Followers'}
     arrow={{icon: './img/icon-up.svg', up: true}}
     today={'1099 Today'}
     site={'instagram'}
    />
    <Tile
     state = {props.state}
     icon={'./img/icon-youtube.svg'}
     username={'Nathan F.'}
     followers={'8239'}
     type={'Subscribers'}
     arrow={{icon: './img/icon-down.svg', up: false}}
     today={'144 Today'}
     site={'youtube'}
    />
   </div>
  </div>
 )
}

export default SocialMediaDashboard;