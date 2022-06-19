import React from "react";

const SubComponentThreeNumber = React.memo(({ number }: { number: { number: number }}) => {
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
      {number.number}
    </div>
  )
});

SubComponentThreeNumber.displayName = 'SubComponentThreeNumber'
  
export default SubComponentThreeNumber;
  