import ReactIcons from './reactIcons/ReactIcons';
import Toastify from './reactToastify/Toastify';
import { SvgMorph } from './svgMorph/SvgMorph';
import ReactModal from './reactModal/ReactModal';
import ReactTippy from './reactTippy/ReactTippy';

function App() {
  return (
    <div className="App">
      <h2>React Icons</h2>
      <ReactIcons/>
      <h2>Svg Morph</h2>
      <SvgMorph/>
      <h2>React Toastify</h2>
      <Toastify/>
      <h2>React Modal</h2>
      <ReactModal/>
      <h2>React Tippy</h2>
      <ReactTippy/>
    </div>
  );
}

export default App;
