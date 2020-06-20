import React, { useState, useEffect } from "react";

const SelectBar = (props) => {
  const [transportMode, setTransportMode] = useState([]);

  useEffect(() => {
    fetch(props.api)
      .then((res) => res.json())
      .then((data) => {
        setTransportMode(data);
      });
  }, []);

  function changingValue(e) {
    props.setSelectedOption(e.target.value);
  }

  return (
    <div>
      <select onChange={changingValue} className="select">
        <option>Select {props.transport}:</option>
        {transportMode.map((x, i) => {
          return (
            <option key={i} value={x.modeName}>
              {x.modeName}
            </option>
          );
        })}
      </select>
      <h3>
        {props.method} : {props.selectedOption}
      </h3>
    </div>
  );
};

export default SelectBar;
