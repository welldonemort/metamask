import * as React from "react";
import "./Info.css";
import axios from "axios";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Planet from "../../components/Planet/Planet";

const Info = () => {
  const { id } = useParams();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  let { data, error, isLoading } = useSWR(
    `https://new-backend.unistory.app/api/data/id/${id}`,
    fetcher
  );

  return (
    <div className="info-holder">
      <Header />

      {data && (
        <div className="info">
          <div className="info__content">
            <span className="info__title">Personal data</span>

            <span className="info__white">Name</span>
            <span className="info__orange">{data.username}</span>

            <span className="info__white">Email</span>
            <span className="info__orange">{data.email}</span>

            <span className="info__white">Wallet</span>
            <span className="info__orange">{data.address}</span>
          </div>

          <Planet noText />
        </div>
      )}
    </div>
  );
};

export default Info;
