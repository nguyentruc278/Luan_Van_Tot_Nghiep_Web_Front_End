import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import "../../assets/css/globalPageStyle.css";
import { numberWithCommas } from '../../utility/thousandSeperate';


export default function CaseChart(props) {

    const { data } = props;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="chart-case-tooltip">
                    <p>Ngày: <span className="case-tooltip-detail">{`${payload[0].payload.date}`}</span></p>
                    <p>Ca nhiễm: <span className="case-tooltip-detail">{`${numberWithCommas(payload[0].payload.case24h)}`}</span></p>
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
                        <Bar dataKey="case24h" barSize={10} fill="#ff6666" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
