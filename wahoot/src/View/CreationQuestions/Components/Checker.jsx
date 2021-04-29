import React from 'react';

const Checker = ({checked, onChange}) => (
  <div>
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
    />Bonne réponse
  </div>
);

export default Checker;