import React, { useState, useEffect } from "react";

const SelectLine = (props) => {
  const [lineMode, setLineMode] = useState([]);

  useEffect(() => {
    if (props.selectedOption) {
      fetch(`https://api.tfl.gov.uk/Line/Mode/${props.selectedOption}`)
        .then((res) => res.json())
        .then((data) => {
          setLineMode(data);
        });
    }
  }, [props.selectedOption]);

  function nameHandler(e) {
    props.setSelectLine(e.target.value);
  }

  return (
    <div>
      <select className="select" onChange={nameHandler}>
        <option>Select Line</option>
        {lineMode.map((x, i) => {
          return <option key={i}>{x.name}</option>;
        })}
      </select>
      <h3>Line: {props.selectLine}</h3>
    </div>
  );
};

export default SelectLine;
