from locust import HttpUser, between, task


class WebsiteUser(HttpUser):
    wait_time = between(5, 15)

    def on_start(self):
        self.client.post(
            "/login", {"username": "barbara.king@gmail.com", "password": "@5$2L6ui6K"}
        )

    @task
    def random(self):
        self.client.get("/products/random?count=100")
