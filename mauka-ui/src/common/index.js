const IGNORE_TEST_LIST = ["insert", "update", "script", "delete", "./","~"]
export const UNDEFINED = undefined
export const isTextValid = (input) => IGNORE_TEST_LIST.find(ignoreText => input.includes(ignoreText))
export function isTextAllowed (input) {
    return IGNORE_TEST_LIST.find(ignoreText => input.includes(ignoreText))
}

export const SIGNAL_CONF = {
    "0": {
        "color": "gray",
        "rating": "Neutral",
        "trend": "Neutral"
    },
    "1": {
        "color": "green",
        "rating": "Buy",
        "trend": "Bullish"
    },
    "2": {
        "color": "red",
        "rating": "Sell",
        "trend": "Bearish"

    }
}

export const periodButtonConf = {
    "Daily": "1d", 
    "Weekly" : "1wk",
    "Hourly" : "1h"
}

export const PRICE_ACTION = "TotSignal"
export const RSI = "RSI_SIGNAL"
export const MACD  = "MACD_SIGNAL"
export const COLS_TO_PUBLISH = [PRICE_ACTION, MACD, RSI]
