import type { NextPage } from 'next'
import React, { useState } from 'react'
import SubComponentOneNumber from '../components/NumberComponents/SubComponentOneNumber';
import SubComponentThreeNumber from '../components/NumberComponents/SubComponentThreeNumber';
import SubComponentTwoNumber from '../components/NumberComponents/SubComponentTwoNumber';

const Home: NextPage = () => {
  const [stateOne, setStateOne] = useState(1);
  const [stateTwo, setStateTwo] = useState(1);
  const [stateThree, setStateThree] = useState(1);

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
        <SubComponentOneNumber number={stateOne} />
        <SubComponentTwoNumber number={stateTwo} />
        <SubComponentThreeNumber number={stateThree} />
      </div>
    </div>
  )
}

export default Home
