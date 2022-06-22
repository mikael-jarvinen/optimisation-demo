import React from "react";

const SubComponentThreeNumber = ({ number }: { number: number }) => {
  console.log('subcomponent3 render')

  return (
    <div style={{
      border: '1px red solid',
      borderRadius: '8px',
      display: 'flex',
      padding: '8px',
      margin: '8px',
      textAlign: 'center'
    }}>
      SubComponentThreeNumber<br></br>
      {number}
    </div>
  )
};

SubComponentThreeNumber.displayName = 'SubComponentThreeNumber';

export default SubComponentThreeNumber;
  