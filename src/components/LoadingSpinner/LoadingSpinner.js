import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker({ delay: 500 });
  return (
    promiseInProgress && (
      <div
        style={{
          marginTop: "14rem",
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader type="threeDots" color="#2BAD60" height="100" width="100" />
      </div>
    )
  );
};

export default LoadingIndicator;
