import React, { useState, useEffect } from "react";

const Destination = (props) => {
  const [toDestinationName, setToDestinationName] = useState({});

  useEffect(() => {
    if (toDestinationName) {
      fetch(`https://api.tfl.gov.uk/Line/${props.selectLine}/Route`)
        .then((res) => res.json())
        .then((data) => {
          setToDestinationName(data);
        });
    }
  }, [props.selectLine]);

  // toDestinationName.routeSections[0].destinationName
  // toDestinationName.routeSections[0].originationName

  return (
    <div>
      {toDestinationName.routeSections ? (
        <div>
          <div>
            Start of line:
            <h5>{toDestinationName.routeSections[0].originationName}</h5>
          </div>
          <div>
            End of line:
            <h5>{toDestinationName.routeSections[0].destinationName}</h5>
          </div>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Destination;
