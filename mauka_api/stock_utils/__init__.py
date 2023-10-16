import numpy as np
from datetime import datetime
from mauka_api.enums.signal import SignalEnum 


DATETIME = SignalEnum.DATETIME.value 
# importing the requests library
import requests
import json
# defining the api-endpoint
API_ENDPOINT = "http://localhost:8000/api/signal/"

CATEGORIES = ["RSI", "PRICE"]

def store_message(msg: dict = {}):
    try:
        # sending post request and saving response as response object
        headers = {'Content-type': 'application/json', "Accept": 'application/json'}
        print(f"----- ADDING REQUEST {msg}")
        r = requests.post(url=API_ENDPOINT, data=json.dumps(msg), headers=headers)
        # extracting response text
        response = r.text
        if type(response) == str:
            return response
        return "Record Saved Succesfully"
    except Exception as e:
        print("Exception Storing Message to Found:", e)

def bullish_buy(df):
    return np.where(
            (
                (df["EMA3"]>=df["SMA20"]) & 
                (df["Close"]>=df["SMA20"])
            ),
            "Buy",
            None
    ) 
    
def bullish_sell(df, ema3, previous_ema3, OPEN, RSI, sma20, ema20):
    return np.where(
            ( df[ema3] <= df[sma20]),
            "Sell",
            None
    )

def signal_all(df):
    conditions = [
        ( bullish_buy(df)),
        ( bullish_sell(df))
    ]
    choices = [1, 2]
    df['EMAsignal'] = np.select(conditions, choices, default=0)
    
    
def price_action_filter(df):
    return np.where(     
        (
        # (df['3-5'] < df['3-5'].shift(1)) &
        ((df.macd - df.signal) >= 0.5) &
         (df['RSI_BUY'] == 'Bullish') &
         (df['MACD_BUY'] == 'Bullish') &
         (df['RSI_TREND'] == 'Bullish') &
         (df['MACD_TREND'] == 'Bullish') 
        ),
        "Buy",
        None
    )

def rsi_filter(df):
    return np.where(
    (df['RSI3']>=90)
    ,"Bearish+90", 
        None
    )