import React from "react";

// Proptype
import propTypes from "prop-types"

// Reacharts
import {
    LineChart, ResponsiveContainer, XAxis, Tooltip, YAxis, Line} from "recharts";

/**
 * 
 * @param {Object} params
 * @param {array} params.data
 * @returns {JSX}
 */


  export default function LineChartx({data}) {

        // proptypes
        LineChartx.propTypes = {
            data : propTypes.array.isRequired,
        };

        const daySemaine = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"};
        const formatDay = (item) => daySemaine[item];

        const CustomToolTip = ({active , payload}) => {
            if (active && payload && payload.length) {
                return (
                    <div className="customToolTip">
                        <div className="intro">{`${payload[0].value} min`}</div>
                    </div>
                );
            }
            return null;
        };

        CustomToolTip.propTypes = {
            active: propTypes.bool,
            payload: propTypes.array, 
        };

        return(
            <div className="lineGraph">
                <h1 className="lineTitle">
                    Durée moyenne des<br></br> sessions
                </h1>
                <ResponsiveContainer width="100%" height="100%" >
                    <LineChart data={data}>
                        <XAxis 
                            dataKey="day"
                            tickFormatter={formatDay}
                            axisLine={false}
                            tickSize={0}
                            tickMargin={0}
                            padding={{left:10, right:10}}
                            tick={{ fill: "#FFF" }}
                        />
                        <YAxis 
                            hide
                            type="number"
                            domain={[(dataMin) => dataMin - 30, (dataMax) => dataMax + 30]}
                        />
                        <Tooltip content={CustomToolTip} />

                        <Line 
                            type="natural"
                            dataKey="sessionLength"
                            stroke="#FFF"
                            strokeWidth={2}
                            activeDot={{r: 4}}
                            dot={{r: 0}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        )
    } 