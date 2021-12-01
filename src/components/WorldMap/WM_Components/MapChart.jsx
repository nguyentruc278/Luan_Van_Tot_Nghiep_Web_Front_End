import { scaleOrdinal } from "d3-scale";
import React, { memo } from "react";
import {
    ComposableMap,
    Geographies,
    Geography, ZoomableGroup
} from "react-simple-maps";
import "../../../assets/css/globalPageStyle.css";
import { numberWithCommas } from "../../../utility/thousandSeperate";
import { getTranslate } from "../../../utility/translateCountryName";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-10m.json";


const MapChart = ({ setTooltipContent, data }) => {

    /**
     * 
     * @param {String} findCountryName Ten mot mot nuoc can tim
     * @param {Array} arrayCountry Mang cac nuoc
     */
    const getDataByName = (findCountryName, arrayCountry) => {
        let result
        arrayCountry.forEach((country) => {
            if (country.name === findCountryName)
                result = country
        })
        return result
    }

    const colorScale = scaleOrdinal()
        .domain(data.map((d) => d.level))
        .range(["#800000", "#b30000", "#bf4040", "#ff6666", "#ffe2e3", "#ffd9b3"]);

    return (
        <>
            <ComposableMap data-tip=""
                projectionConfig={{ scale: 250, rotate: [-10, -3, -3] }}
                style={{ marginTop: 15, height: 600, width: "95%" }}
                stroke={0.5} strokeWidth="#ffffe6"
            >
                <ZoomableGroup>
                    {data.length > 0 && (
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const { NAME, ISO_A3 } = geo.properties;
                                    const d = data.find((s) => s.IOS3 === ISO_A3)
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onMouseEnter={() => {
                                                const countries = getTranslate(NAME, "vietnamese")
                                                const lastDayData = getDataByName(countries, data)
                                                if (d !== undefined && countries) {
                                                    let caseTotal = numberWithCommas(lastDayData.caseTotal)
                                                    let deathTotal = numberWithCommas(lastDayData.deathTotal)
                                                    setTooltipContent({
                                                        name: countries,
                                                        caseTotal: caseTotal,
                                                        deathTotal: deathTotal
                                                    })
                                                } else {
                                                    setTooltipContent("")
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                setTooltipContent("")
                                            }}
                                            style={{
                                                default: {
                                                    outline: "none",
                                                    stroke: '#404040',
                                                    strokeWidth: 0.5,
                                                },
                                                hover: {
                                                    fill: "#ffe6e6",
                                                    outline: "none",
                                                    stroke: '#404040',
                                                    strokeWidth: 0.5,
                                                },
                                            }}
                                            fill={d ? colorScale(d.level) : "#cccccc"}
                                        />
                                    )
                                })
                            }
                        </Geographies>
                    )}
                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);