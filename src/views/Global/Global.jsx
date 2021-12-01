import axios from 'axios';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { FadingBalls } from 'react-cssfx-loading';
import { Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { getAllData, getChartDataCaseTotal, getLastDayData, getRegionCase, getRegionCaseTotal } from '../../api/config';
import "../../assets/css/globalPageStyle.css";
import CasesOfRegion from '../../components/CasesOfRegion/CasesOfRegion';
import AfricaChart from '../../components/GlobalCharts/AfricaChart';
import AmericasChart from '../../components/GlobalCharts/AmericasChart';
import CaseChart from '../../components/GlobalCharts/CaseChart';
import DeathChart from '../../components/GlobalCharts/DeathChart';
import EasternMediterraneanChart from '../../components/GlobalCharts/EasternMediterraneanChart';
import EuropeChart from '../../components/GlobalCharts/EuropeChart';
import SouthEastAsiaChart from '../../components/GlobalCharts/SouthEastAsia';
import TotalCasesRegion from '../../components/GlobalCharts/TotalCasesRegion';
import WesternPacificChart from '../../components/GlobalCharts/WesternPacificChart';
import GlobalDataTable from '../../components/GlobalDataTable/GlobalDataTable';
import WorldMap from '../../components/WorldMap/WorldMap';
import { numberWithCommas } from "../../utility/thousandSeperate";

export default function Global() {

    const [isLoading, setIsLoading] = useState(true);

    const [dataTotal, setDataTotal] = useState(null);

    const [region, setRegion] = useState(null);

    const [regionTotal, setRegionTotal] = useState(null);

    const [dataCase, setDataCase] = useState(null);

    const [data, setData] = useState(null);

    async function getDataTotal() {
        try {
            let country = 'global'
            const result = await axios.get(getLastDayData + `/${country}`);
            setDataTotal(result.data.data);
        } catch (error) {
            setIsLoading(false);
        }
    }

    async function getRegion() {
        try {
            const result = await axios.get(getRegionCase);
            setRegion(result.data.data);
        } catch (error) {
            setIsLoading(false);
        }
    }

    async function getRegionTotal() {
        try {
            const result = await axios.get(getRegionCaseTotal);
            setRegionTotal(result.data.data);
        } catch (error) {
            setIsLoading(false);
        }
    }

    async function getAllCases() {
        try {
            const result = await axios.get(getChartDataCaseTotal);
            setDataCase(result.data.data);
        } catch (error) {
            setIsLoading(false);
        }
    }

    async function getData() {
        try {
            const result = await axios.get(getAllData);
            setData(result.data.data);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    async function loadingDataBE() {
        await getAllCases()
        await getDataTotal()
        await getData()
        await getRegion()
        await getRegionTotal()
        setIsLoading(false);
    }

    useEffect(() => {
        loadingDataBE()
    }, [])

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <Container>
                <div className="text-center pageTitle">SỐ LIỆU VỀ DỊCH COVID-19 TRÊN THẾ GIỚI</div>

                <div className="timeUpdate">
                    <i><span style={{ color: "#ff0000" }}>*</span> Được cập nhật theo dữ liệu của  <a href="https://covid19.who.int/" target="_blank" rel="noreferrer" className="link">WHO Coronavirus (COVID-19)</a>
                    </i>
                </div>

                <div className="whole-wrap">
                    <Row className="wrap">
                        <Col className="col-md-6 col1">
                            <div className="detailData1">
                                <div className="titleNumber1">Ca nhiễm</div>
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
                                                    <div className="number1">{numberWithCommas(dataTotal.caseTotal)}</div>
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
                        <Col className="col-md-6 col1">
                            <div className="detailData2">
                                <div className="titleNumber2">Ca tử vong</div>
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
                                                    <div className="number2">{numberWithCommas(dataTotal.deathTotal)}</div>
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

                <div className="table1">
                    <Row className="wrap1">
                        <Col className="col-md-6 ">
                            <div className="chart">
                                <h4>Số ca nhiễm theo ngày</h4>
                                {isLoading ? (
                                    <>
                                        <div className="loading">
                                            <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <CaseChart data={dataCase} />
                                    </>
                                )}
                            </div>
                        </Col>
                        <Col className="col-md-6 ">
                            <div className="chart">
                                <h4>Số ca tử vong theo ngày</h4>
                                {isLoading ? (
                                    <>
                                        <div className="loading">
                                            <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <DeathChart data={dataCase} />
                                    </>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="options">
                    <Nav className="tab-pane">
                        <NavItem className="nav-item">
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Bản đồ vùng dịch
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Thống kê các nước
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab} className="mb-3">
                        <TabPane tabId="1">
                            <div className="worldmap">
                                {isLoading ? (
                                    <>
                                        <div className="loading">
                                            <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <WorldMap data={data} />
                                    </>
                                )}
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            {isLoading ? (
                                <>
                                    <div className="loading">
                                        <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <GlobalDataTable data={data} />
                                </>
                            )}
                        </TabPane>
                    </TabContent>
                </div>

                <div style={{ width: "100%", marginTop: 30, marginBottom: 50 }}>
                    <Row className="wrap-barchart">
                        <Col className="col-md-8">
                            <div className="barchart">
                                {isLoading ? (
                                    <>
                                        <div className="loading">
                                            <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <TotalCasesRegion data={region} />
                                    </>
                                )}
                            </div>
                        </Col>
                        <Col className="col-md-4 barchart">
                            {isLoading ? (
                                <>
                                    <div className="loading">
                                        <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <CasesOfRegion data={regionTotal} />
                                </>
                            )}
                        </Col>
                    </Row>

                    <Row style={{ marginTop: 30 }}>
                        <Col className="col-md-6 region">
                            <h4>Châu Mỹ</h4>
                            {isLoading ? (
                                <>
                                    <div className="loading">
                                        <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <AmericasChart data={region} />
                                </>
                            )}

                        </Col>
                        <Col className="col-md-6 region">
                            <h4>Châu Âu</h4>
                            {isLoading ? (
                                <>
                                    <div className="loading">
                                        <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <EuropeChart data={region} />
                                </>
                            )}

                        </Col>
                    </Row>
                    <Row style={{ marginTop: 30 }}>
                        <Col className="col-md-6 region">
                            <h4>Đông Nam Á</h4>
                            {isLoading ? (
                                <>
                                    <div className="loading">
                                        <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <SouthEastAsiaChart data={region} />
                                </>
                            )}

                        </Col>
                        <Col className="col-md-6 region">
                            <h4>Tây Thái Bình Dương</h4>
                            {isLoading ? (
                                <>
                                    <div className="loading">
                                        <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <WesternPacificChart data={region} />
                                </>
                            )}

                        </Col>
                    </Row>
                    <Row style={{ marginTop: 30 }}>
                        <Col className="col-md-6 region">
                            <h4>Đông Địa Trung Hải</h4>
                            {isLoading ? (
                                <>
                                    <div className="loading">
                                        <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <EasternMediterraneanChart data={region} />
                                </>
                            )}

                        </Col>
                        <Col className="col-md-6 region">
                            <h4>Châu Phi</h4>
                            {isLoading ? (
                                <>
                                    <div className="loading">
                                        <FadingBalls color="#737373" width="8px" height="8px" duration="1s" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <AfricaChart data={region} />
                                </>
                            )}

                        </Col>
                    </Row>

                </div>

            </Container>
        </>
    )
}






