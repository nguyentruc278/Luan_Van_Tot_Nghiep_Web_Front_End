import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FadingBalls } from 'react-cssfx-loading';
import { Col, Container, Row } from 'reactstrap';
import { getVietnamData, getVietnamProvince } from '../../api/config';
import "../../assets/css/vietnamPageStyle.css";
import VietNamDataTable from '../../components/VietNamDataTable/VietNamDataTable';
import VietnamMap from '../../components/VietnamMap/VietnamMap';
import { numberWithCommas } from '../../utility/thousandSeperate';

export default function Vietnam() {

    const [isLoading, setIsLoading] = useState(true);

    const [dataTotal, setDataTotal] = useState(null)

    const [dataProvince, setDataProvince] = useState(null)

    async function getDataTotal() {
        try {
            const result = await axios.get(getVietnamData);
            setDataTotal(result.data.data);
        } catch (error) {
            setIsLoading(false);
        }
    }

    async function getDataProvince() {
        try {
            const result = await axios.get(getVietnamProvince);
            setDataProvince(result.data.data);
        } catch (error) {
            setIsLoading(false);
        }
    }

    async function loadingVNDataBE() {
        await getDataTotal()
        await getDataProvince()
        setIsLoading(false);
    }
    useEffect(() => {
        loadingVNDataBE()
    }, [])

    return (
        <>
            <Container>
                <div className="text-center pageTitle">SỐ LIỆU VỀ DỊCH COVID-19 TẠI VIỆT NAM</div>

                <div className="timeUpdate">

                    <i><span style={{ color: "#ff0000" }}>*</span> Dữ liệu cập nhật tối ngày&nbsp;
                        {isLoading ? (
                            <>
                                <div className="loading">
                                    <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                </div>
                            </>
                        ) : (
                            <>{dataTotal.date}</>
                        )} <br />
                        Theo dữ liệu của <a href="https://covid19.gov.vn/" target="_blank" rel="noreferrer" className="link">Cổng thông tin của Bộ Y tế về đại dịch Covid-19</a>
                    </i>

                </div>

                <div className="total text-center">
                    <Row className="total1">
                        <Col className="col-md-4 col1">
                            <div className="totalData1">
                                <div className="totalNumber1">Ca nhiễm</div>
                                <div>
                                    {isLoading ? (
                                        <>
                                            <div className="loading">
                                                <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {dataTotal ? (
                                                <>
                                                    <div className="vn-number1">{numberWithCommas(dataTotal.caseTotal)}</div>
                                                    <div className="increaseNumber">
                                                        <span style={{ color: "#ff0000", fontWeight: "bold" }}>&uarr;</span> {numberWithCommas(dataTotal.case24h)}
                                                    </div>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col className="col-md-4 col2">
                            <div className="totalData2">
                                <div className="totalNumber2">Đã hồi phục</div>
                                <div>
                                    {isLoading ? (
                                        <>
                                            <div className="loading">
                                                <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {dataTotal ? (
                                                <>
                                                    <div className="vn-number2">{numberWithCommas(dataTotal.recoveredTotal)}</div>
                                                    <div className="increaseNumber">
                                                        <span style={{ color: "#ff0000", fontWeight: "bold" }}>&uarr;</span> {numberWithCommas(dataTotal.recovered24h)}
                                                    </div>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col className="col-md-4 col1">
                            <div className="totalData3">
                                <div className="totalNumber3">Ca tử vong</div>
                                <div>
                                    {isLoading ? (
                                        <>
                                            <div className="loading">
                                                <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {dataTotal ? (
                                                <>
                                                    <div className="vn-number3">{numberWithCommas(dataTotal.deathTotal)}</div>
                                                    <div className="increaseNumber">
                                                        <span style={{ color: "#ff0000", fontWeight: "bold" }}>&uarr;</span> {numberWithCommas(dataTotal.death24h)}
                                                    </div>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </>
                                    )}

                                </div>
                            </div>
                        </Col>

                    </Row>

                </div>

                <div className="hr"></div>

                <div style={{ marginTop: 50, marginBottom: 50 }}>
                    <Row>
                        <Col className="col-md-7">
                            <div className="vn-data">
                                {isLoading ? (
                                    <>
                                        <div className="loading">
                                            <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <VietnamMap data={dataProvince} />
                                    </>
                                )}
                            </div>
                        </Col>
                        <Col className="col-md-5">
                            <div className="vn-data">
                                {isLoading ? (
                                    <>
                                        <div className="loading">
                                            <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <VietNamDataTable data={dataProvince} />
                                    </>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </>
    )
}
