import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import "../../assets/css/globalPageStyle.css";
import { numberWithCommas } from '../../utility/thousandSeperate';

export default function AfricaChart(props) {

    const { data } = props;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="region-case-tooltip">
                    <div style={{ paddingBottom: 10 }}>NGÀY <span className="region-tooltip-detail">{`${payload[0].payload.date}`}</span></div>
                    <div>Ca nhiễm: <span style={{ color: "#a60321" }}>{`${numberWithCommas(payload[0].payload.AfricaCase)}`}</span></div>
                    <div>Ca tử vong: <span style={{ color: "#fc6984" }}>{`${numberWithCommas(payload[0].payload.AfricaDeath)}`}</span></div>
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
                            <linearGradient id="colorCase6" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ff6666" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#ff6666" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" />
                        <Tooltip content={<CustomTooltip />} position={{ y: -50 }} />
                        <Area dataKey="AfricaDeath" stackId="1" type="monotone" stroke="#fc6984" fill="#ffffff" strokeWidth={2} />
                        <Area dataKey="AfricaCase" stackId="1" type="monotone" stroke="#a60321" fill="url(#colorCase6)" fillOpacity={1} strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
