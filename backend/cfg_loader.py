import os

from dotenv import load_dotenv

load_dotenv()

SERVER_URL = str(os.getenv("SERVER_URL"))
