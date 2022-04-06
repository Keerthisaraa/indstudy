from typing import List

from fastapi import APIRouter
from sqlmodel import Session, func, or_, select

from db import engine
from schema import Product

router = APIRouter()


def get_products(stmt):
    products: List[Product] = []
    with Session(engine) as session:
        for row in session.execute(stmt):
            products.append(row[0])

    return products


@router.get("/products/random", tags=["products"])
def random(count: int):
    stmt = select(Product).order_by(func.rand()).limit(count)
    return get_products(stmt)


@router.get("/products/search", tags=["products"])
def search(search_string: str, count: int):
    stmt = (
        select(Product)
        .filter(
            Product.product_name.contains(search_string),
        )
        .limit(count)
    )
    return get_products(stmt)


# @router.get("/products/categories", tags=["products"])
# def categories(category: str, count: int):
#     session.query(Product).join(ProductCategory).filter(
#         Product.id == ProductCategory.id, ProductCategory.category == category
#     ).all()
