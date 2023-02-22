import * as React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { useEthers } from "@usedapp/core";
import { Link } from "react-router-dom";

const Header = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  const handleClick: any = () => {
    if (account) deactivate();
    else activateBrowserWallet();
  };

  return (
    <div className="header">
      <Link to="/" className="header-logo">
        logo
      </Link>

      {!account && <Button text={"Connect metamask"} onClick={handleClick} />}
      {account && <span className="user">{account}</span>}
    </div>
  );
};

export default Header;
