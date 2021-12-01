import React from 'react';
import { Col, Row } from 'reactstrap';
import { numberWithCommas } from '../../utility/thousandSeperate';
import "../../assets/css/globalPageStyle.css";

export default function CasesOfRegion(props) {

    const { data } = props

    return (
        <>
            <div style={{ paddingTop: 15 }}>
                {data.map((property, index) => {
                    switch (property.regionName) {
                        case "Americas":
                            return (
                                <>
                                    <Row className="regionDetail">
                                        <Col className="col-sm-7">
                                            <div className="regionName">Châu Mỹ</div>
                                            <div className="color1"></div>
                                        </Col>
                                        <Col className="col-sm-5">
                                            <div className="regionCase1">{numberWithCommas(property.regionCase)}</div>
                                        </Col>
                                    </Row>
                                </>
                            )
                        case "Europe":
                            return (
                                <>
                                    <Row className="regionDetail">
                                        <Col className="col-sm-7">
                                            <div className="regionName">Châu Âu</div>
                                            <div className="color2"></div>
                                        </Col>
                                        <Col className="col-sm-5">
                                            <div className="regionCase2">{numberWithCommas(property.regionCase)}</div>
                                        </Col>
                                    </Row>
                                </>
                            )
                        case "South-East Asia":
                            return (
                                <>
                                    <Row className="regionDetail">
                                        <Col className="col-sm-7">
                                            <div className="regionName">Đông Nam Á</div>
                                            <div className="color3"></div>
                                        </Col>
                                        <Col className="col-sm-5">
                                            <div className="regionCase3">{numberWithCommas(property.regionCase)}</div>
                                        </Col>
                                    </Row>
                                </>
                            )
                        case "Eastern Mediterranean":
                            return (
                                <>
                                    <Row className="regionDetail">
                                        <Col className="col-sm-7">
                                            <div className="regionName">Đông Địa Trung Hải</div>
                                            <div className="color4"></div>
                                        </Col>
                                        <Col className="col-sm-5">
                                            <div className="regionCase4">{numberWithCommas(property.regionCase)}</div>
                                        </Col>
                                    </Row>
                                </>
                            )
                        case "Western Pacific":
                            return (
                                <>
                                    <Row className="regionDetail">
                                        <Col className="col-sm-7">
                                            <div className="regionName">Tây Thái Bình Dương</div>
                                            <div className="color5"></div>
                                        </Col>
                                        <Col className="col-sm-5">
                                            <div className="regionCase5">{numberWithCommas(property.regionCase)}</div>
                                        </Col>
                                    </Row>
                                </>
                            )
                        case "Africa":
                            return (
                                <>
                                    <Row className="regionDetail">
                                        <Col className="col-sm-7">
                                            <div className="regionName">Châu Phi</div>
                                            <div className="color6"></div>
                                        </Col>
                                        <Col className="col-sm-5">
                                            <div className="regionCase6">{numberWithCommas(property.regionCase)}</div>
                                        </Col>
                                    </Row>
                                </>
                            )
                        default:
                            break;
                    }
                })}
            </div>
        </>
    )
}
