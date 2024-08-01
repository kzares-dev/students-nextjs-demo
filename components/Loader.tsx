"use client";

import { useFormStatus } from "react-dom";

const Loader = () => {
  const { pending, data } = useFormStatus();

  return <button className="btn_primary">
    {!pending? "Create" : <div className="loading-icon" />}
  </button>
};

export default Loader;
