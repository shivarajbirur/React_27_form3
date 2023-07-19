import React from "react";

function FormInput ({ handleChangeChild}) {
  function wrapHandleChange(event){
    console.log("Child triggered onChange")}
}

return (
  <div className = "field">
    <input onChange= {wrapHandleChange} />
    </div> 
);
}

export default FormInput;