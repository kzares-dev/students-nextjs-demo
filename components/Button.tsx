"use client";
import { ModalContext } from "@/lib/context";
import { useContext } from "react";

const Button = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "navbar";
}) => {
  const { state, dispatch } = useContext(ModalContext);

  const onClickCallback = () => {
    if(type === "navbar"){
      dispatch({ type: 'TOGGLE_MODAL' });
      return;
    }
  }

  return <button onClick={onClickCallback}>{children}</button>;
};

export default Button;
