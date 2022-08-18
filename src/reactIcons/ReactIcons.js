import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import {IconContext } from 'react-icons';

const ReactIcons = () => {
  return (
    <div className="react-icons" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {/* Using the IconContext.Provider */}
        <IconContext.Provider value={{ color: 'purple', size: '10rem' }}>
            <FaReact />
            <SiGithub />
        </IconContext.Provider>
        {/* With inline properties */}
        {/* <FaReact color='purple' size='10rem' />
        <SiGithub color='purple' size='10rem' /> */}
    </div>
  )
}

export default ReactIcons