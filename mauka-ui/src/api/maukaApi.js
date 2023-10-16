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