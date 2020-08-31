import React from 'react';

function Title(props) {
  const style = {
   bg: {
     background: props.state.checked ? '#1f212e' : '#f5f7ff'
   },
   head: {
    color: props.state.checked ? '#fff' : ''
   },

   p: {
    color: props.state.checked ? '#8e91ba' : '',
    borderBottomColor: props.state.checked ? '#373a4d' : ''
   },

   toggle : {
    backgroundImage: props.state.checked ? 'linear-gradient(to right, #378fe6 , #3eda82)' : ''
   },

   indicator: {
    background: props.state.checked ? '#1f212e' : ''
   }
  }

  return (
    <div className="title-container" style={style.bg}>
      <div className="title">
        <h2 style={style.head}>Social Media Dashboard</h2>
        <p style={style.p}>Total Followers: 23,004</p>
      </div>
      <div className="toggle-container">
        <label style={style.p}>Dark Mode
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