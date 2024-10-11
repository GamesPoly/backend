import React from "react";
import "./SkeletonSlider.scss";
import AdBanner from "../../AdSlider/components/AdBanner/AdBanner";
import AdBand from "../../AdSlider/components/AdBand/AdBand";

function SkeletonSlider() {
  return (
    <section className="ads-slider">
      <AdBanner gameAdObj={{}} />
      <ul className="ads-slider__list">
        <li className="ads-slider__item">
          <AdBand gameAdObj={{}} />
        </li>
        <li className="ads-slider__item">
          <AdBand gameAdObj={{}} />
        </li>
        <li className="ads-slider__item">
          <AdBand gameAdObj={{}} />
        </li>
        <li className="ads-slider__item">
          <AdBand gameAdObj={{}} />
        </li>
      </ul>
    </section>
  );
}

export default SkeletonSlider;
