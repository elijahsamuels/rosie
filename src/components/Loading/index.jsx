import React from "react";
import dogLoading from "../../images/dogLoading.gif";
import "./styles.css";

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <img src={dogLoading} alt="loading" className="dog-loading" />
      </div>
      <div className="loading-container">Loading . . .</div>
    </>
  );
};

export default Loading;
