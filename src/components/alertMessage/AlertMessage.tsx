import React from "react";
import { MainColorContext } from "../../App";
import "./alertMessage.scss";

function AlertMessage({ text }: { text: string }) {
  const mainColor = React.useContext(MainColorContext);
  return (
    <div className="alertMessage" style={{ border: `1px solid ${mainColor}` }}>
      {text}
    </div>
  );
}

export default AlertMessage;
