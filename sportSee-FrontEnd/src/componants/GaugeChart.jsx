import React from "react";
import propTypes from 'prop-types'
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";


/**
 * 
 * @param { Object } params
 * @param { Number } params.data
 * @returns {JSX} 
 */

export default function GaugeChartx({data}){

    GaugeChartx.prototype = {
        data: propTypes.number.isRequired,
    };

    const CustomLegend = ({payload}) => (
        <div className="legend">
            <div className="legendObject">{payload[0].payload.value * 100}%</div>
            <div className="legendTitle">de votre objectif</div>
        </div>
    );


    CustomLegend.propTypes = {
        payload: propTypes.array.isRequired,
    };

    return (
        <div className="graphGauge">
            <h1 className="gaugeTitle">Score</h1>
            <ResponsiveContainer width="100%" height="100%" aspect={1.5}>
                <PieChart >
                    <Pie    
                        dataKey="value"
                        data={[
                            {name: "score" , value: data},
                            {name:  "total", value: 1 - data},
                        ]}
                        cx= "50%"
                        cy= "50%"
                        innerRadius={"90%"}
                        outerRadius="100%"
                        startAngle={90}
                        endAngle={450}
                    >
                        <Cell fill="#E60000" stroke="#E60000" />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>
                    <Pie 
                        cx={"50%"}
                        cy={"50%"}
                        outerRadius={"90%"}
                        fill="#FFF"
                        data={[{name : "shadow-circle", value: 100}]}
                        dataKey="value"
                    />
                    <Legend 
                        verticalAlign="middle"
                        align="center"
                        content={CustomLegend}
                        />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}



