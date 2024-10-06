import React from "react";
import "./AdBand.scss";
import { Link } from "react-router-dom";

type BandType = {
  id: number | string;
  image: any;
  name: string;
  desc: string;
  ganre: string;
  tags: string[];
  events: number[];
};

type AdBandProps = {
  obj: BandType;
};

function AdBand({ obj }: AdBandProps) {
  return (
    <Link to="#" className="ad-band">
      <img src={obj.image} alt="" className="ad-band__cover" />
      <div className="ad-band__info">
        <h3 className="ad-band__title">{obj.name}</h3>
        <p className="ad-band__desc">{obj.desc}</p>
        <div className="ad-band__tags">
          <p className="ad-band__ganre">{obj.ganre}</p>
          {obj.tags.map((item, index) => (
            <p className="ad-band__tag" key={index}>
              #{item}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default AdBand;
