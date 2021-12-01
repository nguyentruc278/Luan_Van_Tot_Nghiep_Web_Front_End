import React from 'react';
import "../../assets/css/globalPageStyle.css";
import { numberWithCommas } from '../../utility/thousandSeperate';

export default function GlobalDataTable(props) {

    const data = props.data;

    return (
        <>
            <div className="table">
                <div className="thead">
                    <div role="row" className="tr table-header">
                        <div className="th countryName">Tên quốc gia</div>
                        <div className="th">Ca nhiễm<br />hôm qua</div>
                        <div className="th">Ca tử vong<br />hôm qua</div>
                        <div className="th">Tổng số<br />ca nhiễm</div>
                        <div className="th">Tổng số<br />ca tử vong</div>
                    </div>
                </div>
                <div role="rowgroup" className="tbody overflow">
                    {data.map((data, index) => (
                        <div role="row" className="tr table-body" key={index}>
                            <div role="cell" className="td countryName">{data.name}</div>
                            <div role="cell" className="td case24h"> + {numberWithCommas(data.case24h)}</div>
                            <div role="cell" className="td death24h"> + {numberWithCommas(data.death24h)}</div>
                            <div role="cell" className="td">{numberWithCommas(data.caseTotal)}</div>
                            <div role="cell" className="td">{numberWithCommas(data.deathTotal)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
