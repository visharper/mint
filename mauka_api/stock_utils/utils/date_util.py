from datetime import datetime, timezone, timedelta

current_datetime_utc = datetime.utcnow()
current_datetime = datetime.now()
DEFAULT_FORMAT = "%Y-%m-%d"

def get_report_date(fmt = "%y%m%d%H%M%S"):
    return current_datetime.strftime(fmt)
    
def get_today_date(fmt = "%Y-%m-%d", utc: bool = False):
    if not utc:
        return current_datetime.strftime(fmt)
    return current_datetime_utc.strftime(fmt)

def get_today_dt():
    return datetime.date.today()

def get_tomorrow_date(fmt="%Y-%m-%d"):
    today_dt =  get_today_dt
    return today_dt + timedelta(days=1)

def get_n_past_date(n: int, fmt=None):
    return_date = current_datetime + timedelta(days=n)
    if fmt:
        return return_date.strftime(fmt)
    return return_date

def dt_to_str(dt: datetime, fmt="%Y-%m-%d"):
    return dt.strftime(fmt)