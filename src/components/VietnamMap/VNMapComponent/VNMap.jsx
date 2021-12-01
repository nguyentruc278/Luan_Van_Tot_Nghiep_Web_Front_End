import { scaleOrdinal } from "d3-scale";
import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from "react-simple-maps";
import paracelIslandGeoUrl from "../../../utility/gadm36_XPI_0.json";
import spralyIslandGeoUrl from "../../../utility/gadm36_XSP_0.json";
import { numberWithCommas } from "../../../utility/thousandSeperate";
import vnTopo from "../../../utility/topoJSON.json";

const vietnam = [paracelIslandGeoUrl, spralyIslandGeoUrl];

export default function VNMap({ data, setTooltipContent }) {

    const colorScale = scaleOrdinal()
        .domain(data.map((d) => d.level))
        .range(["#800000", "#b30000", "#bf4040", "#ff6666", "#ffe2e3"]);

    return (
        <>
            {data.length > 0 ? (
                <div>
                    <ComposableMap
                        projectionConfig={{ scale: 2250, rotate: [-20, 4, -15] }}
                        data-tip=""
                        width={500}
                        height={620}
                        projection="geoMercator"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    >
                        <ZoomableGroup center={[108, 16]}>
                            <Geographies geography={vnTopo}>
                                {({ geographies }) =>
                                    geographies.map((geo) => {
                                        const { rsmKey } = geo
                                        const d = data.find((s) => s.key === rsmKey)
                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => {
                                                    if (d !== undefined) {
                                                        let cases = numberWithCommas(d.cases)
                                                        let casesToday = numberWithCommas(d.casesToday)
                                                        let death = numberWithCommas(d.death)
                                                        setTooltipContent({
                                                            name: d.name,
                                                            cases: cases,
                                                            casesToday: casesToday,
                                                            death: death
                                                        })
                                                    }
                                                }}
                                                onMouseLeave={() => {
                                                    setTooltipContent("")
                                                }}
                                                fill={d ? colorScale(d.level) : "#ffffff"}
                                                style={{
                                                    default: {
                                                        stroke: '#212529',
                                                        strokeWidth: 0.5,
                                                        outline: 'none',
                                                    },
                                                    hover: {
                                                        fill: '#e6dfd9',
                                                        stroke: '#212529',
                                                        strokeWidth: 0.5,
                                                        outline: 'none',
                                                    },
                                                }}
                                            />
                                        )

                                    }
                                    )
                                }
                            </Geographies>

                            {vietnam.map((geoUrl) => (
                                <Geographies key={geoUrl} geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                style={{
                                                    default: {
                                                        fill: "#808080",
                                                        stroke: "#212529",
                                                        strokeWidth: 0.75,
                                                        outline: "none"
                                                    },
                                                    hover: {
                                                        fill: "#e6dfd9",
                                                        stroke: "#212529",
                                                        strokeWidth: 0.75,
                                                        outline: "none"
                                                    }
                                                }}
                                            />
                                        ))
                                    }
                                </Geographies>
                            ))}

                        </ZoomableGroup>
                    </ComposableMap>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
