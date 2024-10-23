import React from "react";
import "./Catalog.scss";
import AsideSettings from "./components/AsideSettings/AsideSettings";
import { SkeletonTheme } from "react-loading-skeleton";
import { CatalogFiltersProvider } from "@context/CatalogFiltersProvider";
import CatalogGamesContent from "./components/CatalogGamesContent/CatalogGamesContent";

function Catalog() {
  return (
    <CatalogFiltersProvider>
      <SkeletonTheme baseColor="#202020" highlightColor="#fff">
        <main className="catalog">
          <AsideSettings />
          <div className="catalog__wrapper">
            <CatalogGamesContent />
          </div>
        </main>
      </SkeletonTheme>
    </CatalogFiltersProvider>
  );
}

export default Catalog;
