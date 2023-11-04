import { createSlice, current } from "@reduxjs/toolkit";
import { handleSignalFilters } from ".";

export const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchList: [],
    period: "1d",
    ticker: "",
    interval: "1d",
    signalFilters: "",
    // signalFilters: [
    //   { key: "message_type", value: ["Bullish"] },
    //   {
    //     key: "time_range",
    //     value: ["1d"],
    //   },
    //   {
    //     key: "ticker",
    //     value: ["WMT", "GPS"],
    //   },
    // ],
  },
  reducers: {
    addTickerToWatchList: (state, action) => {
      console.log(state, action.payload);
      const ticker = action.payload.ticker;
      state.watchList.push(ticker);
    },
    removeTickerToWatchList: (state, action) => {
      const ticker = action.payload.ticker;
      const filteredList = state.watchList.filter(
        (symbol) => symbol !== ticker
      );
      state = {
        ...state,
        watchList: filteredList,
      };
    },
    addTickerToBackTest: (state, action) => {
      console.log(state, action.payload);
      state.watchList.ticker = action.payload.ticker;
    },
    changeInvPeriod: (state, action) => {
      console.log(state, action);
      state = {
        ...state,
        period: action.payload.period,
      };
    },
    changeIntervalForBacktest: (state, action) => {
      console.log(state, action);
      state = {
        ...state,
        interval: action.payload.interval,
      };
    },
    setSignalFilters: (state, { payload }) => {
      // const oldFilters = current(state.signalFilters) || "";
      // const filters = handleSignalFilters(oldFilters, payload);
      console.log("Updating State to : ", payload);

      state = {
        ...state,
        signalFilters: payload,
      };
      console.log("Update State to : ", state.signalFilters);
    },
  },
});

export const {
  addTickerToWatchList,
  removeTickerToWatchList,
  changeInvPeriod,
  addTickerToBackTest,
  changeIntervalForBacktest,
  setSignalFilters,
} = watchListSlice.actions;

export default watchListSlice.reducer;
