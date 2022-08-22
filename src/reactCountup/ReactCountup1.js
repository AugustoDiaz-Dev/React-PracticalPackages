import React, { useRef } from 'react';
import { useCountUp } from 'react-countup';
// Looks like the method start is not working, instead the method pauseResume acts as starter.
 const CompleteHook = () => {
  const countUpRef = useRef(null);
  const { 
    start, 
    pauseResume, 
    reset, 
    update 
} = useCountUp({
    ref: countUpRef,
    end: 10000,
    delay: 1000,
    duration: 5,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
 
  });
  return (
    <div>
        <div ref={countUpRef}>
      </div>
      <button onClick={start}>Start</button> 
      <button onClick={pauseResume}>Start / Pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div>
  );
};

export default CompleteHook;