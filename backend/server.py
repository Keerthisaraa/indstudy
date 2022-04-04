from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import auth, categories, products

app = FastAPI(
    title="Shopping APP",
)

app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]
)


app.include_router(auth.router)
app.include_router(products.router)
app.include_router(categories.router)
