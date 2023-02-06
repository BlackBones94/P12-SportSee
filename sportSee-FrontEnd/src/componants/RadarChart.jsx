import React from "react";

// Proptypes
import propTypes from "prop-types";

// Recharts
import {PolarGrid, PolarAngleAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";
  
/**
 * @param { Object } params
 * @param { Object } params.data
 * @returns {JSX}
 */


  export default function RadarChartx({data}) {
    const kind = data.kind;
    const datas = data.data;

    RadarChartx.propTypes = {
        data: propTypes.object.isRequired
    }

    // creation d'une const ou on mettra tous 
    // les titres de la kind
    const kindTitle = {
        cardio: "Cardio",
        energy: "Energy",
        endurance: "Endurance",
        strength: "Strength",
        speed: "Speed",
        intensity: "Intensity",
    }

    const formatKind = (id) => kindTitle[kind[id]];
    
    return (
        <div className="radarChart">
            <ResponsiveContainer width="%" height="100%" >
                <RadarChart 
                    cx="50%"
                    cy="50%"
                    outerRadius="65%"
                    startAngle={210}
                    endAngle={570}
                    data={datas}
                >
                <PolarGrid 
                 radialLines={false}
                />
                <PolarAngleAxis 
                    dataKey="kind"
                    tickFormatter={formatKind}
                    tick={{ fill: "#FFF",fontSize: "12px"}}
                />

                <Radar 
                    dataKey="value"
                    stroke="#E60000"
                    fill='#E60000'
                    fillOpacity={0.7}
                />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
  }