from mauka_api.stock_utils.stock_screener_backend import fetch_data
from mauka_api.utils.date_util import get_n_past_date, get_today_date
DEFAULT_TICKERS = [ "XOM"]
# "TSLA", "NVDA", "RIVN", "XRX",
DEFAULT_PERIOD = "1d"
start_date = "2023-09-15"
end_date = "2023-10-01"
fetch_data(DEFAULT_TICKERS, start_date="", end_date="", interval=DEFAULT_PERIOD)