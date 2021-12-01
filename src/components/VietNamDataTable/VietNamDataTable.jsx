import React from 'react'
import { numberWithCommas } from '../../utility/thousandSeperate';
import "../../assets/css/vietnamPageStyle.css"

export default function VietNamDataTable(props) {

    const { data } = props;

    return (
        <>
            <div className="table vn-table">
                <div className="thead">
                    <div role="row" className="tr vn-table-header">
                        <div className="th vn-th name">Tỉnh/ TP</div>
                        <div className="th vn-th">Nhiễm</div>
                        <div className="th vn-th new-case">Hôm qua</div>
                        <div className="th vn-th">Tử vong</div>
                    </div>
                </div>
                <div role="rowgroup" className="tbody overflow vn-overflow">
                    {data.map((province, index) => (
                        <div role="row" className="tr table-body" key={index}>
                            <div role="cell" className="td vn-td name">{province.name}</div>
                            <div role="cell" className="td vn-td"> {numberWithCommas(province.cases)}</div>
                            <div role="cell" className="td vn-td caseToday"> + {numberWithCommas(province.casesToday)}</div>
                            <div role="cell" className="td vn-td">{numberWithCommas(province.death)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
