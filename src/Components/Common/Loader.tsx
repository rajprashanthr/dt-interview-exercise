import React, { useState } from 'react';

const Loader = ({ msg = 'Loading' }: { msg?: string }) => (
  <div className="loader-container">
    <div className="loader"></div>
    <h4 style={{ marginTop: '0.5rem' }}>{msg}</h4>
  </div >
)

export default Loader;