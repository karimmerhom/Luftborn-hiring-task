import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getStats } from "../../api/api";
import ReportForCard from "../../components/reportForCard/reportCard";
import StatCard from "../../components/statCard/statCard";
import "./mainPage.scss";

export default function MainPage() {
  const [stats, setStats] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getStatsCall = () => {
    getStats(10)
      .then((res) => {
        setStats(res.data);
        console.log("res: ", res);
        setIsLoading(false);
        if (res.status !== 200) {
          toast.error(res.messasge, {
            position: "bottom-center",
          });
        } else {
          setStats(res.data);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error(e.message, {
          position: "bottom-center",
        });
      });
  };

  useEffect(() => {
    getStatsCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="body">
      {!isLoading ? (
        <>
          {" "}
          <ReportForCard />
          <div className="statCardsContainers">
            {stats &&
              stats.map((stat, index) => {
                return <StatCard stat={stat} index={index} />;
              })}
          </div>
        </>
      ) : (
        <div className="spinner" />
      )}
    </div>
  );
}
