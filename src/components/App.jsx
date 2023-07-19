import React from "react";
import { createRoot } from "react-dom/client";
import FormInput from "./FormInput";

function App() {
  const [message, setMessage] = React.useState("");

  function handleChangeParent(event, val) {
    setMessage(event.target.value);
    console.log(event.target.value);
    console.log(val);
  }

  return (
    <div className="container">
      <div className="incrementBox">
        <h1>Hey, (message)</h1>
        <div>
          <FormInput
            handleChangeChild={(event) => handleChangeParent(event, 100)}
          />
          <button>Sumbit Details</button>
        </div>
      </div>
    </div>
  );
}
export default App;
