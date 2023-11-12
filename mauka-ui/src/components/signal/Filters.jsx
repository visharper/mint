import React, { useEffect, useState } from "react";
import { signalColumns } from "../../common/signal";
import { Box, Input } from "@chakra-ui/react";
import FilterInput from "./FilterInput";

function Filters(props) {
  const { IsClearValue } = props;

  const inputBox = (name) => <FilterInput Name={name} IsClear={IsClearValue} />;
  const filterElemets = [];
  signalColumns.map(
    (signal) => signal.isFilter && filterElemets.push(inputBox(signal.name))
  );
  return <>{filterElemets}</>;
}

export default Filters;
