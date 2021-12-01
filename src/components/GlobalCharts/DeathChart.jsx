import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import "../../assets/css/globalPageStyle.css";
import { numberWithCommas } from '../../utility/thousandSeperate';


export default function DeathChart(props) {

    const { data } = props;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="chart-death-tooltip">
                    <p>Ngày: <span className="death-tooltip-detail">{`${payload[0].payload.date}`}</span></p>
                    <p>Ca tử vong: <span className="death-tooltip-detail">{`${numberWithCommas(payload[0].payload.death24h)}`}</span></p>
                </div>
            )
        }
        return null
    }

    return (
        <>
            <div className="chart-size">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} width={525} height={275} margin={{ top: 0, right: 10, left: 10, bottom: 20 }}>
                        <XAxis dataKey="date" />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar type="monotone" dataKey="death24h" barSize={10} fill="#3399ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
