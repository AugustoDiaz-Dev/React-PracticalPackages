import React from 'react'
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'

const ReactSpinners = () => {

  return (
    <div>
        <BounceLoader loading={true} size={24} color='red'/>
        <br />
        <BarLoader loading={true} size={48} color='orange'/>
        <br />
        <BeatLoader loading={true} size={72} color='maroon'/>
        <br />
    </div>
  )
}

export default ReactSpinners