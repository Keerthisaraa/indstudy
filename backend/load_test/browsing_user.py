import random

from locust import HttpUser, between, task


class BrowsingUser(HttpUser):
    wait_time = between(5, 15)

    def on_start(self):
        self.client.post(
            "/login", {"username": "barbara.king@gmail.com", "password": "@5$2L6ui6K"}
        )

    @task
    def random(self):
        self.client.get("/products/random?count=100")

    @task
    def search(self):
        self.client.get("/products/search?count=100")


class TrackingUser(HttpUser):
    wait_time = between(5, 15)

    def __init__(self):
        self.user_id = random.randint(0, 9999)

    def on_start(self):
        self.client.post(
            "/login", {"username": "barbara.king@gmail.com", "password": "@5$2L6ui6K"}
        )

    @task
    def random(self):
        self.client.get("/products/random?count=100")

    @task
    def track_order(self):
        self.client.get(f"/orders/orders?user_id={self.user_id}")


class AverageUser(HttpUser):
    wait_time = between(5, 15)

    def on_start(self):
        self.client.post(
            "/login", {"username": "barbara.king@gmail.com", "password": "@5$2L6ui6K"}
        )

    @task
    def random(self):
        self.client.get("/products/random?count=100")

    @task
    def search(self):
        self.client.get("/products/random?count=100")
