import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicChip = dynamic(() => import('@mui/material/Chip'));

const Dynamic = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && (
        <DynamicChip label="Bundle loaded" />
      )}
    </div>
  )
}

export default Dynamic;
