import React from 'react';
import OverviewTile from './OverviewTile';
import overviewData from '../data/overviewData.json';

function OverviewToday(props) {
 const style = {
  color: props.state.checked ? '' : '#fff'
 }

 const overviewComponent = overviewData.map(data => <OverviewTile 
  type={data.type}
  icon={data.icon}
  count={data.count}
  arrow={data.arrow}
  percent={data.percent}
  state={props.state}
 />);

 return (
  <div className="overview-container" >
   <h2 style={style}>Overview - Today</h2>
   <div className="overview-tile-container">
    {overviewComponent}
   </div>
  </div>
 )
}

export default OverviewToday;
