import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import "../../assets/css/globalPageStyle.css";
import { numberWithCommas } from '../../utility/thousandSeperate';

export default function EuropeChart(props) {

    const { data } = props;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="region-case-tooltip">
                    <div style={{ paddingBottom: 10 }}>NGÀY <span className="region-tooltip-detail">{`${payload[0].payload.date}`}</span></div>
                    <div>Ca nhiễm: <span style={{ color: "#ffd700" }}>{`${numberWithCommas(payload[0].payload.EuropeCase)}`}</span></div>
                    <div>Ca tử vong: <span style={{ color: "#ffdb4d" }}>{`${numberWithCommas(payload[0].payload.EuropeDeath)}`}</span></div>
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
                            <linearGradient id="colorCase2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ffdd1a" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#ffdd1a" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" />
                        <Tooltip content={<CustomTooltip />} position={{ y: -50 }} />
                        <Area dataKey="EuropeDeath" type="monotone" stackId="1" stroke="#ffdb4d" fill="#ffffff" strokeWidth={2} />
                        <Area dataKey="EuropeCase" type="monotone" stackId="1" stroke="#ffd700" fill="url(#colorCase2)" fillOpacity={1} strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
