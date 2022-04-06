from pathlib import Path
from typing import Tuple

import pandas as pd


def clean_data(path: Path) -> Tuple[pd.DataFrame, pd.DataFrame]:
    df = pd.read_csv(str(path))
    df.columns = df.columns.str.replace(" ", "_").str.lower().str.strip()
    keep_cols = [
        "uniq_id",
        "product_name",
        "category",
        "selling_price",
        "about_product",
        "product_specification",
        "image",
    ]
    df = df.loc[:, keep_cols]
    df.selling_price = pd.to_numeric(
        df.selling_price.str.split("-").str[0].str.strip().str.split("$").str[1],
        errors="coerce",
    )
    df = df.rename(columns={"uniq_id": "id"})
    product_category = make_product_category(df.id, df.category)
    df = df.drop(columns="category")

    return df, product_category


def make_product_category(id: pd.Series, category: pd.Series) -> pd.DataFrame:
    product_categories = []

    for i, categories in enumerate(category.fillna(" ")):
        categories = categories.split("|")
        for category in categories:
            product_categories.append(
                {"product_id": id.values[i], "category": category.strip()}
            )

    return pd.DataFrame(product_categories).drop_duplicates()
