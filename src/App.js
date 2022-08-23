import React, {useState, useEffect} from 'react'
import ReactIcons from './reactIcons/ReactIcons';
import { SvgMorph } from './svgMorph/SvgMorph';
import ReactModal from './reactModal/ReactModal';
import ReactTippy from './reactTippy/ReactTippy';
import ReactCountup from './reactCountup/ReactCountup';
import ReactCountup1 from './reactCountup/ReactCountup1';
import ReactColor from './reactColor/ReactColor';
import ReactSpinners from './reactSpinners/ReactSpinners';

function App() {

  let [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

  return (
    <div className="App">
      {
        loading ? <ReactSpinners/> 
        : <div>
        <h2>React Icons</h2>
        <ReactIcons/>
        <hr />
        <h2>Svg Morph</h2>
        <SvgMorph/>
        <hr />
        {/* <h2>React Toastify</h2>
        <Toastify/>
        <hr /> */}
        <h2>React Modal</h2>
        <ReactModal/>
        <hr />
        <h2>React Tippy</h2>
        <ReactTippy/>
        <hr />
        <h2>React CountUp</h2>
        <ReactCountup1/>
        <ReactCountup/>
        <hr />
        <h2>React Color</h2>
        <ReactColor/>
        <hr />
        </div>
      }
    </div>
  );
}

export default App;
