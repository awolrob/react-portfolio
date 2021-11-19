import React from "react";

function Wrapper(props) {
  return <div
    style={{
      paddingTop: "50px",
      background: "#ECEFF1",
      height: "100%",
      display: "flex",
      flexFlow: "row wrap",
      padding: "20px",
      justifyContent: "space-around",
      alignContent: "flex-start",
      overflow: "auto"
    }}
  >
    {props.children}
  </div>;
}

export default Wrapper;
