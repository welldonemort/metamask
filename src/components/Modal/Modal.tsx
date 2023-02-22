import * as React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

type ModalProps = {
  setIsOpen: Function;
};

const Modal = ({ setIsOpen }: ModalProps) => {
  const close = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-holder">
      <div className="modal">
        <span className="modal-title">metamask extention</span>

        <div className="modal-content">
          To work with our application, you have to install the{" "}
          <Link
            to="https://metamask.io/"
            target="_blank"
            className="link-orange"
          >
            Metamask browser extension
          </Link>
        </div>

        <Button onClick={close} text="Skip this step" />
      </div>
    </div>
  );
};

export default Modal;
