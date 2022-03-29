from pathlib import Path

import pandas as pd
from sqlalchemy import create_engine
from utils import clean_data

if __name__ == "__main__":
    df, product_categories = clean_data(Path("./data/amazon_dataset.csv"))
    engine = create_engine("mysql+pymysql://root:test@localhost/amazon")

    df.to_sql("products", con=engine, if_exists="replace", index=False)
    product_categories.to_sql(
        "product_categories", con=engine, if_exists="replace", index=False
    )
    users_df = pd.read_csv("./data/users_10000.csv")
    users_df.to_sql("users", con=engine, if_exists="replace", index=False)