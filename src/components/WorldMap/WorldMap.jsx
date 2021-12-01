import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip';
import MapChart from './WM_Components/MapChart'
import "../../assets/css/globalPageStyle.css"
import { Row, Col } from 'reactstrap';

export default function WorldMap({ data }) {

    const [content, setContent] = useState({
        name: "",
        caseTotal: "",
        deathTotal: ""
    });

    return (
        <>
            <Row>
                <Col sm="12" >
                    <div className="seperate">
                        <div className="seperateColor1"></div> <div>0</div>
                    </div>
                    <div className="seperate">
                        <div className="seperateColor2"></div> <div>1 - 5 000</div>
                    </div>
                    <div className="seperate">
                        <div className="seperateColor3"></div> <div>5 001 - 50 000</div>
                    </div>
                    <div className="seperate">
                        <div className="seperateColor4"></div> <div>50 001 - 500 000</div>
                    </div>
                    <div className="seperate">
                        <div className="seperateColor5"></div> <div>500 001 - 5 000 000</div>
                    </div>
                    <div className="seperate">
                        <div className="seperateColor6"></div> <div>&gt; 5 000 000</div>
                    </div>
                </Col>
            </Row>

            <MapChart setTooltipContent={setContent} data={data} />
            <ReactTooltip content={content}>
                {content.caseTotal ? (
                    <div style={{ padding: 5 }}>
                        <h4>{content.name}</h4>
                        <div style={{
                            borderBottom: "1px solid #ffffff",
                            marginBottom: 10, marginTop: 10
                        }}>
                        </div>
                        <h5>Ca nhiễm: {content.caseTotal}</h5>
                        <h5>Ca tử vong: {content.deathTotal}</h5>
                    </div>
                ) : null}
            </ReactTooltip>
        </>
    )
}
