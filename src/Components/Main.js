import React from 'react';
import Typed from 'react-typed';
const Main = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
           <h1> web development and website promotion</h1>
           <Typed
           className="typed-text"
           strings={["Web desing" , "web developement" , "google adss"]}
           typeSpeed={40}
           backSpeed={60}
           loop
           
           />
           <a href='#contact' className='btn-main-offre'>Contact mee</a>
      </div>

    </div>
  
  )
}

export default Main