import datetime
import random
from typing import List, Tuple

import pandas as pd
from locust import HttpUser, between, task

from utils import clean_data

users_df = pd.read_csv("../data/users_10000.csv")
products, _ = clean_data("../data/amazon_dataset.csv")


def get_random_user() -> Tuple[str, str]:
    random_user = users_df.sample(1).reset_index(drop=True)
    return (
        random_user.id.values[0],
        random_user.email.values[0],
        random_user.password.values[0],
    )


def get_random_products() -> List[Tuple[str, int]]:
    nproducts = random.randint(1, 5)
    random_products = products.sample(nproducts).id.values.tolist()
    return [[product, random.randint(1, 3)] for product in random_products]


def get_random_search_term() -> str:
    search_terms = products.product_name.sample(1).str.split(" ").values.tolist()[0]
    return search_terms[random.randint(0, len(search_terms) - 1)]


class BrowsingUser(HttpUser):
    weight = 3
    wait_time = between(0.5, 2)

    def on_start(self):
        self.id, self.username, self.password = get_random_user()
        self.client.post(
            "/login", {"username": self.username, "password": self.password}
        )

    @task
    def random(self):
        self.client.get("/products/random", params={"count": 100})

    @task
    def search(self):
        self.client.get(
            f"/products/search", params={"search_string": {get_random_search_term()},
            "count": 100}
        )


class TrackingUser(HttpUser):
    weight = 1
    wait_time = between(0.5, 2)

    def on_start(self):
        self.id, self.username, self.password = get_random_user()
        self.client.post(
            "/login", {"username": self.username, "password": self.password}
        )

    @task
    def track_order(self):
        self.client.get(f"/orders", params={"user_id": self.id})


class AverageUser(HttpUser):
    weight = 3
    wait_time = between(0.5, 2)

    def on_start(self):
        self.id, self.username, self.password = get_random_user()
        self.client.post(
            "/login", {"username": self.username, "password": self.password}
        )

    @task
    def random(self):
        self.client.get("/products/random", params={"count": 100})

    @task
    def search(self):
        self.client.get(
            f"/products/search", params={"search_string": get_random_search_term(),
            "count": 100}
        )

    @task
    def place_order(self):
        now = datetime.datetime.strftime(datetime.datetime.now(), "%Y-%m-%d %H:%M:%S")
        self.client.put(
            "/orders",
            params={"user_id": self.id, "order_date": now},
            json=get_random_products(),
        )
