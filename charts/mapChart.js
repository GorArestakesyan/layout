import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { AiOutlineCaretDown } from "react-icons/ai";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function MapChart() {
  return (
    <div className="mapChart">
      <div className="chartTopText">
        <p>Medias Staats</p>
        <span>
          Last Week <AiOutlineCaretDown />
        </span>
      </div>
      <ComposableMap className="map">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#EEE",
                  },
                  hover: {
                    fill: "rgb(251 207 113)",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <span className="mapSignUps">
        Affiliate Sign Ups <AiOutlineCaretDown />
      </span>
      <div className="mapStats">
        <div>
          <ol className="mapOL">
            <li>United States</li>
            <li>China</li>
            <li>United Kingdom</li>
          </ol>
        </div>
        <div>
          <ul className="mapUL">
            <li>200</li>
            <li>65</li>
            <li>22</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
