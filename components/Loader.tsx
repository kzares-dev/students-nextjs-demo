"use client";

const Loader = ({
  pending,
  onClick,
  text
}: {
  pending: boolean;
  onClick?: () => void;
  text: string
}) => {
  return (
    <button onClick={onClick} className="btn_primary">
      {!pending ? text : <div className="loading-icon" />}
    </button>
  );
};

export default Loader;
