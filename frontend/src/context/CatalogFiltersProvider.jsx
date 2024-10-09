import React, { createContext, useContext, useState } from "react";

const CatalogFiltersContext = createContext();

export const CatalogFiltersProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedSet, setSelectedSet] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const changeSelectedGenre = (genre) => {
    // Игнорировать нажатие, если жанр уже выбран
    if (selectedGenre === genre) return;

    setSelectedGenre(genre);
  };

  const changeSelectedSet = (set) => {
    // Игнорировать нажатие, если набор уже выбран
    if (selectedSet === set) return;

    setSelectedSet(set);
  };

  const changeLoadingState = (state) => {
    setIsLoading(state);
  };
  return (
    <CatalogFiltersContext.Provider
      value={{
        selectedGenre,
        selectedSet,
        changeSelectedGenre,
        changeSelectedSet,
        isLoading,
        changeLoadingState,
      }}
    >
      {children}
    </CatalogFiltersContext.Provider>
  );
};

export function useCatalogFilters() {
  const context = useContext(CatalogFiltersContext);

  return context;
}
