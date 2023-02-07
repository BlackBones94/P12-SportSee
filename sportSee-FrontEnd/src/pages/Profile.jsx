import React from "react";

// DATA MOCK
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
  } from "../data/mock"

// IMG
import calories from "../assets/calories.png";
import proteines from "../assets/protein.png";
import glucides from "../assets/carbs.png";
import lipides from "../assets/fat.png";

// Hook
import UserStats from "../componants/UserStats";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";

// CHARTS COMPONANT
import BarChartx from "../componants/BarChart";
import LineChartx from "../componants/LineChart";
import RadarChartx from "../componants/RadarChart";
import GaugeChartx from "../componants/GaugeChart";

// CLASSE
import Performance from "../utils/models/PerformanceClass";

function Profile() {

  const url = "http://localhost:3000"; 
  const { id } = useParams();

  // Data Mock Karl////////////////////////
  
  const données = {
      activity: USER_ACTIVITY[0],
      averageSessions: USER_AVERAGE_SESSIONS[0].sessions,
      performance: new Performance(USER_PERFORMANCE[0]),
      user: USER_MAIN_DATA[0],
      userScore: USER_MAIN_DATA[0],
      loadingUser : false,
      loadingActivity : false,
      loadingAverageSessions : false,
      loadingPerformance : false
  }

  // Data Mock Cécilia ////////////////////////


//   const données = {
//     activity: USER_ACTIVITY[1].sessions,
//     averageSessions: USER_AVERAGE_SESSIONS[1].sessions,
//     performance: new Performance(USER_PERFORMANCE[1]),
//     user: USER_MAIN_DATA[1],
//     userScore: USER_MAIN_DATA[1],
//     loadingUser : false,
//     loadingActivity : false,
//     loadingAverageSessions : false,
//     loadingPerformance : false
// }


   const  {
      activity,
      averageSessions,
      performance,
      user,
      loadingUser,
      loadingActivity,
      loadingAverageSessions,
      loadingPerformance,
    } = données;

/////////////////////////////////////////////////
 
    // Call Api
    // const {
    //   activity,
    //   averageSessions,
    //   performance,
    //   user,
    //   loadingUser,
    //   loadingActivity,
    //   loadingAverageSessions,
    //   loadingPerformance,
    // } = useFetchData(url, id);


    // //////////////////////////////////////

  // condition si les données sont charger ou pas 
  // return le loading
  console.log("perf",performance)
 if (
    loadingUser ||
    loadingActivity ||
    loadingAverageSessions ||
    loadingPerformance
  ) {
    return <h1>Loading</h1>;
  } 
    return(
        <div className="globalDivProfil">
          <h1 className="titleName">Bonjour{" "} 
            <span className="userName">
               {user === undefined ? "En charge" : user.userInfos.firstName}
            </span>
          </h1>
          <p className="phraseAccroche">Félicitation ! Vous avez explosez vos objectifs d'hier 👏</p>

          <div className="containerGraph">
            <div className="graph">
              <BarChartx data={activity.sessions || activity } />
              <div className="graphContainer">
                <LineChartx data={averageSessions.sessions || averageSessions} />
                <RadarChartx data={performance} />
                <GaugeChartx data={user.score || user.todayScore} />
              </div>
            </div>

            <div className="userStatDiv">
              <UserStats
                user={user}
                image={calories}
                stat={user.keyData.calorieCount / 1000}
                title="Calories"
                type="kCal"
              />
              <UserStats
                user={user}
                image={proteines}
                stat={user.keyData.proteinCount}
                title="Proteines"
                type="g"
              />
              <UserStats
                user={user}
                image={glucides}
                stat={user.keyData.carbohydrateCount}
                title="Glucides"
                type="g"
              />
              <UserStats
                user={user}
                image={lipides}
                stat={user.keyData.lipidCount}
                title="Lipides"
                type="g"
              />
            </div>
          </div>
        </div>
        )
    }



export default Profile;