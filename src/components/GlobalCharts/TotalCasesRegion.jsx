import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import "../../assets/css/globalPageStyle.css";
import { numberWithCommas } from '../../utility/thousandSeperate';

export default function TotalCasesRegion(props) {

    const { data } = props;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="region-case-tooltip">
                    <div style={{ paddingBottom: 10 }}> CA NHIỄM NGÀY <span className="region-tooltip-detail">{`${payload[0].payload.date}`}</span></div>
                    <div>Châu Mỹ: <span className="region-tooltip-detail-1">{`${numberWithCommas(payload[0].payload.AmericasCase)}`}</span></div>
                    <div>Châu Âu: <span className="region-tooltip-detail-2">{`${numberWithCommas(payload[0].payload.EuropeCase)}`}</span></div>
                    <div>Đông Nam Á: <span className="region-tooltip-detail-3">{`${numberWithCommas(payload[0].payload.SouthEastAsiaCase)}`}</span></div>
                    <div>Đông Địa Trung Hải: <span className="region-tooltip-detail-4">{`${numberWithCommas(payload[0].payload.EasternMediterraneanCase)}`}</span></div>
                    <div>Tây Thái Bình Dương: <span className="region-tooltip-detail-5">{`${numberWithCommas(payload[0].payload.WesternPacificCase)}`}</span></div>
                    <div>Châu Phi: <span className="region-tooltip-detail-6">{`${numberWithCommas(payload[0].payload.AfricaCase)}`}</span></div>
                </div>
            )
        }
        return null
    }

    return (
        <>
            <div className="chart-size">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} width={750} height={300} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="date" />
                        <Tooltip content={<CustomTooltip />} position={{ y: -50 }} />
                        <Bar dataKey="AfricaCase" stackId="a" fill="#a60321" />
                        <Bar dataKey="WesternPacificCase" stackId="a" fill="#4a2abf" />
                        <Bar dataKey="EasternMediterraneanCase" stackId="a" fill="#8d9cf2" />
                        <Bar dataKey="SouthEastAsiaCase" stackId="a" fill="#009900" />
                        <Bar dataKey="EuropeCase" stackId="a" fill="#ffd700" />
                        <Bar dataKey="AmericasCase" stackId="a" fill="#f29f05" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
