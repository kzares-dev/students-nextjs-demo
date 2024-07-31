"use client";
import { ModalContext } from "@/lib/context";
import { useContext } from "react";

const Button = ({
  children,
  type,
  customCallback,
}: {
  children: React.ReactNode;
  type: "navbar" | "submit" | "exit";
  customCallback?: () => void
}) => {
  const { state, dispatch } = useContext(ModalContext);

  const onClickCallback = (e: any) => {
    e.preventDefault();

    if(customCallback) {
      customCallback();
      return;
    }

    if(type === "navbar" || type === "exit"){
      dispatch({ type: 'TOGGLE_MODAL' });
      return;
    }
  }

  return <button className={type === "exit" ? "btn_exit" : "btn_primary" } onClick={(e) => onClickCallback(e)}>{children}</button>;
};

export default Button;
