import React from 'react'
import CountUp from 'react-countup'

const ReactCountup = () => {

  return (
    <div>
        <h2>
        <CountUp end={200} 
        onEnd={() => console.log('Ended! 👏')}
        onStart={() => console.log('Started! 💨')} 
        />
        <br />
        <CountUp end={200} duration={5} />
        <br />
        <CountUp start={500} end={1000} duration={5} />
        <br />
        <CountUp end={1000} duration={5} prefix='U$D' decimals={2} />
        <br />
        <CountUp end={1000} duration={5} suffix='$' decimals={2} />
        </h2>
    </div>
  )
}

export default ReactCountup