import {apiEndpoint} from "./"
export const getTickerData = (tickers, range="1d") => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "tickers": tickers, "range": range})
    };
    try{
        return fetch(`http://localhost:8000/api/`, requestOptions)
              .then((response) => response.json())
              .then((data) => (data));
    }
    catch(err){
        console.log(`Failed with ${err}`)
    }
        
}

export const getBackTestData = (tickers, startDate="", endDate = "", interval="1d") => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "tickers": tickers, "interval": interval, "start_date": startDate, "end_date": endDate})
    };
    try{
        return fetch(`http://localhost:8000/api/backtest/`, requestOptions)
              .then((response) => response.json())
              .then((data) => (data));
    }
    catch(err){
        console.log(`Failed with ${err}`)
    }
        
}

export const getSignalData = (tickers, range="1d") => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    try{
        return fetch(`http://localhost:8000/api/signal`)
              .then((response) => response.json())
              .then((data) => (data));
    }
    catch(err){
        console.log(`Failed with ${err}`)
    }
        
}