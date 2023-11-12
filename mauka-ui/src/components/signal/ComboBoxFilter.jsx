import { Select } from "@chakra-ui/react";
import React from "react";

function ComboBoxFilter(props) {
  const { Options, Name } = props;
  const optionElements = () =>
    Options.map((value, idx) => (
      <option key={idx} name={Name} value={value}>
        {value}
      </option>
    ));

  return <Select placeholder="Message Type Filter">{optionElements()}</Select>;
}

export default ComboBoxFilter;
