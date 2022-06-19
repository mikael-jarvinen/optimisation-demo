import type { NextPage } from 'next'
import React, { useState } from 'react'
import SubComponentOneCallback from '../components/CallbackComponents/SubComponentOneCallback';
import SubComponentThreeCallback from '../components/CallbackComponents/SubComponentThreeCallback';
import SubComponentTwoCallback from '../components/CallbackComponents/SubComponentTwoCallback';

const Callbacks: NextPage = () => {
  const [stateOne, setStateOne] = useState(1);
  const [stateTwo, setStateTwo] = useState(1);
  const [stateThree, setStateThree] = useState(1);

  const callbackOne = () => stateOne;
  const callbackTwo = () => stateTwo;
  const callbackThree = () => stateThree;
  // const callbackThree = useCallback(() => stateThree, [stateThree]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={stateOne}
          onChange={(e) => setStateOne(parseInt(e.target.value))}
        />
        <input
          type="number"
          value={stateTwo}
          onChange={(e) => setStateTwo(parseInt(e.target.value))}
        />
        <input
          type="number"
          value={stateThree}
          onChange={(e) => setStateThree(parseInt(e.target.value))}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <SubComponentOneCallback number={callbackOne} />
        <SubComponentTwoCallback number={callbackTwo} />
        <SubComponentThreeCallback number={callbackThree} />
      </div>
    </div>
  )
}

export default Callbacks