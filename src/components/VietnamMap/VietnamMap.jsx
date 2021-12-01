import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "reactstrap";
import VNMap from "./VNMapComponent/VNMap";

export default function VietnamMap({ data }) {

    const [content, setContent] = useState({
        name: "",
        cases: "",
        casesToday: "",
        death: ""
    });

    return (
        <div className="vn-map">
            <VNMap data={data} setTooltipContent={setContent} />
            <div className="ranking-color">
                <Row>
                    <Col sm="12" >
                        <div className="vn-seperate">
                            <div className="vn-seperateColor1"></div>
                        </div>
                        <div className="vn-seperate">
                            <div className="vn-seperateColor2"></div>
                        </div>
                        <div className="vn-seperate">
                            <div className="vn-seperateColor3"></div>
                        </div>
                        <div className="vn-seperate">
                            <div className="vn-seperateColor4"></div>
                        </div>
                        <div className="vn-seperate">
                            <div className="vn-seperateColor5"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" >
                        <div className="level">
                            <div>1-100</div>
                        </div>
                        <div className="level">
                            <div>101-1000</div>
                        </div>
                        <div className="level">
                            <div>1001-10000</div>
                        </div>
                        <div className="level">
                            <div>10001-100000</div>
                        </div>
                        <div className="level">
                            <div>100001+</div>
                        </div>
                    </Col>
                </Row>
            </div>

            <ReactTooltip>
                {content.cases ? (
                    <div style={{ padding: 5 }}>
                        <h4>{content.name}</h4>
                        <div style={{
                            borderBottom: "1px solid #ffffff",
                            marginBottom: 10, marginTop: 10
                        }}>
                        </div>
                        <h5>Ca nhiễm: {content.cases}</h5>
                        <h5>Ca nhiễm mới: {content.casesToday}</h5>
                        <h5>Ca tử vong: {content.death}</h5>
                    </div>
                ) : null}
            </ReactTooltip>
        </div>
    )
}
