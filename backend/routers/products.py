from typing import List

from fastapi import APIRouter
from sqlmodel import Session, func, select

from db import engine
from schema import Product

router = APIRouter()


@router.get("/products/random", tags=["products"])
def random(count: int):
    stmt = select(Product).order_by(func.rand()).limit(count)

    products: List[Product] = []
    with Session(engine) as session:
        for row in session.execute(stmt):
            products.append(row[0])

    return products


# @router.get("/products/categories", tags=["products"])
# def categories(category: str, count: int):
#     session.query(Product).join(ProductCategory).filter(
#         Product.id == ProductCategory.id, ProductCategory.category == category
#     ).all()
