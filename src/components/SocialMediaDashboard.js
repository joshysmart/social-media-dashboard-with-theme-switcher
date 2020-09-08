import React from 'react';
import Title from './Title.js';
import Tile from './Tile.js';
import socialMediaData from '../data/socialMediaData.json';


function SocialMediaDashboard(props) {
  const socialMediaTileComponent = socialMediaData.map(data => <Tile 
    icon={data.icon}
    username={data.username}
    followers={data.followers}
    type={data.type}
    arrow={data.arrow}
    today={data.today}
    site={data.site}
    state={props.state}
  />);
  
 return (
  <div className="social-media-container" >
    <Title 
    handleChange={props.handleChange}
    state = {props.state}
    />
   <div className="tile-container">
     {socialMediaTileComponent}
   </div>
  </div>
 )
}

export default SocialMediaDashboard;