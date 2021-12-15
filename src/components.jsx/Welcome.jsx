import React from 'react'
import logo from "../images/logo.png"

const Welcome = () => {
    return (
       <div className='Welcome'>
           <section>
           <img src={logo} alt="totoro-logo" onClick={()=>{
               window.location.href ="./films"
           }}/>
           </section>
       </div>
    )
}

export default Welcome
