import { createSlice } from '@reduxjs/toolkit'

export const watchListSlice = createSlice({
  name: 'watchList',
  initialState: {
    watchList: ["XOM"],
    period: "1wk"
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
    changeInvPeriod : (state, action) => {
        // console.log(state, action)
      state = {
        ...state,
        period : action.payload.period
      }
      console.log("AFter Change:>>>>>> ", state.period)
    }
}})

export const {addTickerToWatchList, removeTickerToWatchList, changeInvPeriod} = watchListSlice.actions

export default watchListSlice.reducer
