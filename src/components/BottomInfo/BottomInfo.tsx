import * as React from "react";
import "./BottomInfo.css";
import Button from "../Button/Button";
import { useState } from "react";
import { useEthers } from "@usedapp/core";
import { useNavigate } from "react-router-dom";
const close = require("../../assets/close.svg") as any;

type BottomInfoProps = {
  data: any;
};

type BottomInfoItem = {
  isManual: boolean;
  id: number;
  username: string;
  email: string;
  address: string;
};

const BottomInfo = ({ data }: BottomInfoProps) => {
  const { account } = useEthers();

  const navigate = useNavigate();

  const [isAdd, setIsAdd] = useState(true);
  const [isUserAdded, setIsUserAdded] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState({ ...data });

  const addMe = () => {
    if (name && email) {
      setIsUserAdded(true);
      users.items = [
        { username: name, email, address: account, isManual: true },
        ...users.items,
      ];
      setUsers({ ...users });
      setIsAdd(false);
    }
  };

  const deleteMe = () => {
    setIsUserAdded(false);
    users.items = [...users.items.slice(1)];
    setUsers({ ...users });
    setIsAdd(true);
    setName("");
    setEmail("");
  };

  const handleClick = (item: BottomInfoItem) => {
    if (!item.isManual) navigate(`/${item.id}`);
  };

  return (
    <div className="bottom">
      <form className="bottom-left" onSubmit={addMe}>
        <div className="bottom-left__orange">Beta test registration</div>

        <div className="bottom-left__regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </div>

        <div className="bottom-left__white">Name</div>
        {isAdd ? (
          <input
            type="text"
            placeholder="We will display your name in participation list"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bottom-left__input"
          />
        ) : (
          <div className="bottom-left__orange">{name}</div>
        )}

        <div className="bottom-left__white">Email</div>
        {isAdd ? (
          <input
            type="text"
            placeholder="We will display your email in participation list"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bottom-left__input"
          />
        ) : (
          <div className="bottom-left__orange">{email}</div>
        )}

        <Button
          text="Get early access"
          type="submit"
          onClick={addMe}
          className={isUserAdded || !name || !email ? "disabled" : ""}
        />
      </form>

      <div className="bottom-right">
        <div className="bottom-right__title">
          Participation listing (enable only for participants)
        </div>

        <table className="bottom-right__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Wallet</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.items.map((item: BottomInfoItem) => (
              <tr
                onClick={() => handleClick(item)}
                className={item.isManual ? "tr-custom" : ""}
              >
                <th>{item.username}</th>
                <th>{item.email}</th>
                <th>{item.address}</th>
                <th>
                  {item.isManual && (
                    <img
                      src={close.default}
                      alt="ic-close"
                      className="bottom-right__close"
                      onClick={deleteMe}
                    />
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BottomInfo;
