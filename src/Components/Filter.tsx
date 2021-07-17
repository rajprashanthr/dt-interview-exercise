import React, { useRef, useState } from 'react';
import RangeSlider from './Common/RangeSlider';
import Section from './Common/Section';

export default ({ sortedClientData = [], setMinRange, setCompany }: {
  sortedClientData: any[], setMinRange: Function,
  setCompany: Function
}) => {
  const min = sortedClientData[0]?.sales || 0;
  const max = sortedClientData[sortedClientData.length - 1]?.sales || 0;

  const [minRange, _setMinRange] = useState(min);

  const inpRef = useRef<HTMLInputElement>(null);

  return (
    <Section>
      <form className="pure-form pure-form-stacked filter-form">
        <fieldset>
          <input placeholder="Company" className="pure-input-1 app-input" ref={inpRef} />
          <div>
            <label style={{ marginBottom: '0.5rem' }}>Minimum Sales ($)</label>
            <RangeSlider min={min} max={max} setRange={_setMinRange} />
          </div>
          <button className="pure-input-1 pure-button pure-button-primary app-btn" onClick={(e) => {
            e.preventDefault();
            setMinRange(minRange);
            if (inpRef.current) {
              setCompany(inpRef.current.value);
            }
          }}>Filter Results</button>
        </fieldset>
      </form>
    </Section>
  );
}