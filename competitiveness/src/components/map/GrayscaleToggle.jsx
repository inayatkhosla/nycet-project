import React from 'react';
import { Radio } from 'semantic-ui-react';

const GrayscaleToggle = ({changeColorScale}) => (
  <div><Radio toggle label='Party Agnostic' onChange={(e,d) => changeColorScale(d.checked)}/></div>
)

export default GrayscaleToggle;
