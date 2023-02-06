import React from 'react';

// recharts
import { BarChart,Bar,XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Proptypes
import propTypes from "prop-types";

/**
 * 
 * @param {Object} params
 * @param {array} params.data 
 * @returns {JSX}
 */



export default function BarChartx({data}) {

    // console.log( "data!",data)
    // proptype
    BarChartx.propTypes = {
        data: propTypes.array.isRequired,
    }
   
    const CustomTool = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className='customTool'>
                    <div className='kgData'>{`${payload[0].value}Kg`}</div>
                    <div className="calData">{`${payload[1].value}kCal`}</div>
                </div>
            )
        }
    }
    
    // Format jour par item sur un new date
    const formatDay = (item) => new Date(item).getDate();
    
    
    return(
        <div>
            <div className='barGraph'>
                <h1 className='barTitle'>Activité quotidienne</h1>
                <ul className='barLegend'>
                    <li>Poid (kg)</li>
                    <li>Calories brulées (kcal)</li>
                </ul>

                <ResponsiveContainer width='100%' height='60%'>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="2" vertical={false} />
                        <XAxis 
                            dataKey='day'
                            tickMargin={16}
                            tickSize={0}
                            tickFormatter= {formatDay}
                        />
                        <YAxis 
                            dataKey='kilogram'
                            orientation="right"
                            tickMargin={40}
                            tickSize={0}
                            axisLine= {false}
                            domain = {["dataMin-2", "dataMax+1"]}
                            tickCount= {3}
                        />
                        <YAxis 
                            dataKey="calories"
                            yAxisId="calories"
                            hide
                            orientation='right'
                            domain={['dataMin-100', 'dataMax+10']}
                        />
                        <Tooltip 
                            content={CustomTool}
                        />

                        <Bar 
                            dataKey="kilogram"
                            fill='#282d30'
                            radius={[5,5,0,0]}
                            barSize={10}
                        />

                        <Bar dataKey='calories' fill="transparent" barSize={3} />

                        <Bar 
                            yAxisId='calories'
                            dataKey="calories"
                            fill="#e60000"
                            radius={[5,5,0,0]}
                            barSize={10}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

