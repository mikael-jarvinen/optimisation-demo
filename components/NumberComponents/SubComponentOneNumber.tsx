import { useEffect } from "react";

const SubComponentOneNumber = ({ number }: { number: number }) => {
  console.log('subcomponent1 render')

  return (
    <div style={{
      border: '1px red solid',
      borderRadius: '8px',
      display: 'flex',
      padding: '8px',
      margin: '8px',
      textAlign: 'center'
    }}>
      SubComponentOneNumber<br></br>
      {number}
    </div>
  )
};

export default SubComponentOneNumber;
