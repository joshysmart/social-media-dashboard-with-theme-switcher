import React from 'react';

function Title(props) {
  const style = {
   bg: {
     background: props.state.checked ? '#f5f7ff' : '#1f212e'
   },
   head: {
    color: props.state.checked ? '#1e202a' : '#fff'
   },

   p: {
    color: props.state.checked ? '#63687e' : '#8b97c6',
    borderBottomColor: props.state.checked ? '' : '#373a4d'
   },

   toggle : {
    backgroundImage: props.state.checked ? '' : 'linear-gradient(to right, #378fe6 , #3eda82)'
   },

   indicator: {
    background: props.state.checked ? '' : '#1f212e'
   }
  }

  return (
    <div className="title-container" style={style.bg}>
      <div className="title">
        <h2 style={style.head}>Social Media Dashboard</h2>
        <p style={style.p}>Total Followers: 23,004</p>
      </div>
      <div className="toggle-container">
        <label style={style.label}
        className={`${props.state.checked ? '' :'dark-toggle'}`}
        >Dark Mode
          <div className="toggle" style={style.toggle}>
            <input className="toggle-state" type="checkbox" name="checked" value="check"  onChange={props.handleChange}/>
            <div className="indicator" style={style.indicator}></div>
          </div>
        </label>
      </div>
    </div>

  )
}

export default Title;