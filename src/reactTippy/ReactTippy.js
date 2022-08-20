import React, {forwardRef} from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// https://floating-ui.com/docs/react-dom-interactions

const ColoredTooltip = () => {
  return (
    <div>
        <span style={{color: 'yellow'}}>Colored component</span>
    </div>
  )
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  )
}) 

const ReactTippy = () => {
  return (
    <div>
        <div style={{paddingBottom: '20px'}}>
        <Tippy arrow={false} delay={1000} placement='right' content='Basic Tooltip'>
            <button>Hover</button>
        </Tippy>
        </div>
        
        <div style={{paddingBottom: '20px'}}>
        <Tippy placement='left' content={<span style={{color: 'orange'}}>Colored span tooltip</span>}>
            <button>Hover</button>
        </Tippy>
        </div>

        <div style={{paddingBottom: '20px'}}>
        <Tippy content={<ColoredTooltip/>}>
            <button>Hover</button>
        </Tippy>
        </div>

        <div style={{paddingBottom: '20px'}}>
        <Tippy placement='top-start' content={<ColoredTooltip/>}>
            <CustomChild/>
        </Tippy>
        </div>
        
    </div>
  )
}

export default ReactTippy