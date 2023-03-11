import React,{useState} from "react";
 const Assign=()=>{
  const[program,setProgram]=useState(0);
  return(
    <div>
      <p>{program}</p>
      <button onClick={()=>setProgram(program+1)}>Increment</button>
      <button onClick={()=>setProgram(program-1)}>Increment</button>
      </div>
  );
};
export default Assign;