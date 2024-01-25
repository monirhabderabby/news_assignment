"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgress = () => {
  return (
    <ProgressBar
      height="3px"
      color="#EA580C"
      options={{ showSpinner: false }}
    />
  );
};

export default NProgress;
