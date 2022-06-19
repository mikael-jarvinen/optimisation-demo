const SubComponentTwoNumber = ({ number }: { number: () => number }) => {
  console.log('subcomponent2 render')

  return (
    <div style={{
      border: '1px red solid',
      borderRadius: '8px',
      display: 'flex',
      padding: '8px',
      margin: '8px',
      textAlign: 'center'
    }}>
      SubComponentTwoNumber<br></br>
      {number()}
    </div>
  )
};
  
export default SubComponentTwoNumber;
  