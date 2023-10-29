export * from "./watchlist";

export const handleSignalFilters = (activeFilters, payload) => {
  /*
    Handles Payload to update filters
    Paras:
      Action:  Add/Remove
      Value: value to add/remove to/from filter resp.
    Returns : list of dictionary with filters
       {column_name: filter}
    */
  const { field, value } = payload;
  if (activeFilters.length === 0) {
    return [payload];
  } else {
    const updatedFilters = activeFilters.map((item) => {
      const newItem = item.key === field ? { [field]: value } : item;
      return newItem;
    });
    console.log("updatedFilters ====>", updatedFilters);
    return updatedFilters;
  }
};
