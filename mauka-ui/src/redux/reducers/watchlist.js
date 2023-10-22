import { createSlice } from '@reduxjs/toolkit'

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState: {
    watchList: ["NVDA"],
    period: "1d",
    ticker: "NVDA",
    interval: "1d"
  },
  reducers: {
    addTickerToWatchList: (state, action) => {
        console.log(state, action.payload)
        const ticker = action.payload.ticker
            state.watchList.push(ticker)
        },
   removeTickerToWatchList : (state, action) => {
        const ticker = action.payload.ticker
        const filteredList = state.watchList.filter( symbol => symbol !== ticker )
        state = {
            ...state,
            watchList: filteredList
        }
    },
    addTickerToBackTest: (state, action) => {
      console.log(state, action.payload)
      state.watchList.ticker = action.payload.ticker
      },
    changeInvPeriod : (state, action) => {
        // console.log(state, action)
      state = {
        ...state,
        period : action.payload.period
      }
      console.log("AFter Change:>>>>>> ", state.period)
    },
    changeIntervalForBacktest : (state, action) => {
      state = {
        ...state,
        interval : action.payload.interval
      }
    }
}})

export const {addTickerToWatchList, removeTickerToWatchList, changeInvPeriod, addTickerToBackTest, changeIntervalForBacktest} = watchListSlice.actions

export default watchListSlice.reducer
