import numpy as np
from mauka_api.stock_utils import store_message
from mauka_api.enums import CategoryEnum
from mauka_api import (
    # Signal DB Enums
    SIGNAL_CATEGORY,
    SIGNAL_MESSAGE,
    SIGNAL_MESSAGE_TYPE,
    SIGNAL_TICKER,
    SIGNAL_TIME_RANGE
)

# Category Enums
RSI = CategoryEnum.RSI.value
PRICE_ACTION = CategoryEnum.PRICE_ACTION.value


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

class Signal:
    def __init__(self, ticker, range = "1d"):
        self.resp = dict()
        self.resp[SIGNAL_TIME_RANGE] = range
        self.resp[SIGNAL_TICKER] = ticker
        self.ticker = ticker 
        
    def price_action(self, df):
        try:
            self.resp[SIGNAL_CATEGORY] = "price"
            message = bullish_buy(df)
            last_row_message = message[len(message) - 1]
            print(f"~~~~~~ LAST ROW Price {self.ticker} {last_row_message}")
            if last_row_message:
                print(f">>>>>>>>>>>>>>PRICE ACTION MESSGE : {last_row_message}")
                self.resp[SIGNAL_MESSAGE] = last_row_message
                self.resp[SIGNAL_MESSAGE_TYPE] = "Bullish"
                store_message(self.resp)
            return message
        except Exception as e:
            print(f"!! Exception  Found: {e}" )
            pass
    
    def rsi(self, df):
        self.resp[SIGNAL_CATEGORY] = RSI
        message = rsi_filter(df)
        last_row = message[len(message) - 1]
        print(f"~~~~~~ LAST ROW RSI {self.ticker} {last_row}")
        if last_row:
            self.resp[SIGNAL_MESSAGE] = last_row
            self.resp[SIGNAL_MESSAGE_TYPE] = "BEARISH"
            store_message(self.resp)
        return message        
    