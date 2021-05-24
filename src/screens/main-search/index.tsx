import { NavBar } from "@components/navbar";
import React from "react";
import { Routes } from "@components/routes";
import { useHistory } from "react-router-dom";

export const MainSearch = (): React.ReactElement => {
  const mutable_history = useHistory();

  const handleSearch = (q: string): void =>
    mutable_history.push(`/items?search=${q}`);

  return (
    <React.Fragment>
      <NavBar handleSearch={handleSearch} />
      <Routes />
    </React.Fragment>
  );
};
