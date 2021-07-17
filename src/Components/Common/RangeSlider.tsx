import React, { useState } from 'react';
import '../../Style/RangeSlider.css'

export default (props: any) => {
  let { min = 0, max = 100, setRange } = props;

  min = Math.floor(min);
  max = Math.ceil(max);
  min = min - min % 10;
  max = max - max % 10;
  const [value, setValue] = useState(min);
  const rangePerc = Math.ceil(((value - min) / (max - min)) * 100);

  return (
    <div className="range-container">
      <div className="slider-container">
        <input id="sales-range" step={10} type="range" min={min} max={max} value={value} className="range-slider" onChange={(e) => {
          const val = parseInt(e.target.value, 10);
          setValue(val);
          setRange(val);
        }}
          style={{ background: `linear-gradient(to right, #309ab5 0%, #309ab5 ${rangePerc}%, #e1e2e5 ${rangePerc}.01%, #e1e2e5 100%)` }} />
      </div>
      <div className="range-status-container">
        <div className="range-status">
          <span id="sales-range-status">{value || min || ''}</span>
        </div>
      </div>
    </div>
  );
}