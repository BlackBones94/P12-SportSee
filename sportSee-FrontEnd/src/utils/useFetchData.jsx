// Hook Api
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { USER_MAIN_DATA } from "../data/mock";

import Activity from "./models/ActivityClass";
import Performance from "./models/PerformanceClass";
// import PerformanceKind from "./models/PerformanceKindClass";
import Average from "./models/AverageSessionsClass";
import User from "./models/UserClass";

const useFetchData = (url, id) => {
  //states
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState({});
  const [user, setUser] = useState(USER_MAIN_DATA[0]);
  const [performanceKind, setPerformanceKind] = useState();


  // fetch data service
  const { isLoading: loadingPerformance, sendRequest: fetchPerformance } =
    useFetch(`${url}/user/${id}/performance`);

  const { isLoading: loadingActivity, sendRequest: fetchActivity } = useFetch(
    `${url}/user/${id}/activity`
  );

  const {
    isLoading: loadingAverageSessions,
    sendRequest: fetchAverageSessions,
  } = useFetch(`${url}/user/${id}/average-sessions`);

  const { isLoading: loadingUser, sendRequest: fetchUser } = useFetch(
    `${url}/user/${id}/`
  );

  // useEffect function
  useEffect(() => {
    async function fetchData() {
      const data = await fetchUser();
      const newUser = new User( data.data, data.data.id, data.data.keyData , data.data.score, data.data.todayScore , data.data.userInfos)
      setUser(newUser);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPerformance();
      const newPerf = new Performance( data.data, data.data.kind );
      setPerformance(newPerf);
      console.log("newperf",newPerf)
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchActivity();
      const newActivity = new Activity(data.data.id , data.data.sessions);
      setActivity(newActivity);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAverageSessions();
      const newAverage = new Average(  data.data ,data.data.sessions)
      setAverageSessions(newAverage);
    }
    fetchData();
  }, []);

  
  return {
    activity,
    averageSessions,
    performance,
    user,
    performanceKind,
    loadingUser,
    loadingActivity,
    loadingAverageSessions,
    loadingPerformance,
  };
};
export default useFetchData;


