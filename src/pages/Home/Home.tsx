import "./Home.css";
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainInfo from "../../components/MainInfo/MainInfo";
import BottomInfo from "../../components/BottomInfo/BottomInfo";
import useSWR from "swr";
import axios from "axios";
import * as React from "react";
import { useEthers } from "@usedapp/core";

const Home = () => {
  const { account } = useEthers();

  const [isOpen, setIsOpen] = useState(true);

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  let { data, error, isLoading } = useSWR(
    "https://new-backend.unistory.app/api/data",
    fetcher
  );

  useEffect(() => {
    setIsOpen(!account);
  }, [account]);

  return (
    <div className="home">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Header />

      <div className="container">
        {data && (
          <>
            <MainInfo />
            <BottomInfo data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
