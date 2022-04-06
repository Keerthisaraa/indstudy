import os

from dotenv import load_dotenv

load_dotenv()

MYSQL_URL = str(os.getenv("MYSQL_URL"))
MSSQL_URL = str(os.getenv("MSSQL_URL"))
POSTGRES_URL = str(os.getenv("POSTGRES_URL"))
RUN_MODE = str(os.getenv("RUN_MODE"))
SECRET_KEY = str(os.getenv("SECRET_KEY"))

if RUN_MODE == "MYSQL":
    SERVER_URL = MYSQL_URL
elif RUN_MODE == "MSSQL":
    SERVER_URL = MSSQL_URL
else:
    SERVER_URL = POSTGRES_URL
