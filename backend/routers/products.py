from typing import List

from fastapi import APIRouter
from sqlmodel import Session, create_engine, func, select

from cfg_loader import SERVER_URL
from schema import Product

router = APIRouter()


@router.get("/products/random", tags=["products"])
def random(count: int):
    engine = create_engine(SERVER_URL)
    stmt = select(Product).order_by(func.rand()).limit(count)

    products: List[Product] = []
    with Session(engine) as session:
        for row in session.execute(stmt):
            products.append(row[0])

    return products
