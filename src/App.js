import React, { useState } from "react";
import SelectBar from "./SelectMode";
import "./App.css";
import SelectLine from "./SelectLine";
import Destination from "./Destination";

function App() {
  //select tube, bus, overground and ect
  const [selectedOption, setSelectedOption] = useState(null);
  //select line
  const [selectLine, setSelectLine] = useState(null);

  return (
    <div className="App-header">
      <h1> Transport For London </h1>
      <SelectBar
        api="https://api.tfl.gov.uk/Line/Meta/Modes"
        method="Transport by"
        transport="trasportation mode"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {/* <SelectBar
        method="Line"
        api="https://api.tfl.gov.uk/Line/Mode/tube"
        transport="Line"
      /> */}
      <SelectLine
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        selectLine={selectLine}
        setSelectLine={setSelectLine}
      />
      <Destination selectLine={selectLine} setSelectLine={setSelectLine} />
    </div>
  );
}

export default App;
