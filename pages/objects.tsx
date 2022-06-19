import type { NextPage } from 'next'
import React, { useState } from 'react'
import SubComponentOneObject from '../components/ObjectComponents/SubComponentOneObject';
import SubComponentThreeObject from '../components/ObjectComponents/SubComponentThreeObject';
import SubComponentTwoObject from '../components/ObjectComponents/SubComponentTwoObject';

const Objects: NextPage = () => {
  const [stateOne, setStateOne] = useState(1);
  const [stateTwo, setStateTwo] = useState(1);
  const [stateThree, setStateThree] = useState(1);

  const objectOne = { number: stateOne };
  const objectTwo = { number: stateTwo };
  const objectThree = { number: stateThree };
  // const objectThree = useMemo(() => ({ number: stateThree }), [stateThree]);

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
        <SubComponentOneObject number={objectOne} />
        <SubComponentTwoObject number={objectTwo} />
        <SubComponentThreeObject number={objectThree} />
      </div>
    </div>
  )
}

export default Objects