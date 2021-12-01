import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import "../../assets/css/globalPageStyle.css";
import { numberWithCommas } from '../../utility/thousandSeperate';

export default function SouthEastAsiaChart(props) {

    const { data } = props;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="region-case-tooltip">
                    <div style={{ paddingBottom: 10 }}>NGÀY <span className="region-tooltip-detail">{`${payload[0].payload.date}`}</span></div>
                    <div>Ca nhiễm: <span style={{ color: "#009900" }}>{`${numberWithCommas(payload[0].payload.SouthEastAsiaCase)}`}</span></div>
                    <div>Ca tử vong: <span style={{ color: "#00e64d" }}>{`${numberWithCommas(payload[0].payload.SouthEastAsiaDeath)}`}</span></div>
                </div>
            )
        }
        return null
    }

    return (
        <>
            <div className="chart-size">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} width={500} height={275} margin={{ top: 10, right: 0, left: 0, bottom: 25 }}>
                        <defs>
                            <linearGradient id="colorCase5" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00e600" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#00e600" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" />
                        <Tooltip content={<CustomTooltip />} position={{ y: -50 }} />
                        <Area dataKey="SouthEastAsiaDeath" stackId="1" type="monotone" stroke="#00e64d" fill="#ffffff" strokeWidth={2} />
                        <Area dataKey="SouthEastAsiaCase" stackId="1" type="monotone" stroke="#009900" fill="url(#colorCase5)" fillOpacity={1} strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
