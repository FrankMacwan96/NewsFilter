import React from 'react';

import '../css/index.css'

const Header = (props) => { 
        
        const style={
            background : '#77C9D4' 
        }
          
    return (
    <header style = {style}> 
        <div className="logo">ReactJS</div>
        <input type='text' onChange={props.kw}/>
    </header>
    )
    

}

export default Header;