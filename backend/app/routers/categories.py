from typing import List

from fastapi import APIRouter
from sqlmodel import Session, create_engine, func

from cfg_loader import SERVER_URL
from schema import ProductCategory

router = APIRouter()


@router.get("/categories/random", tags=["categories"])
def random(count: int):
    engine = create_engine(SERVER_URL)
    categories: List[str] = []
    random_function = func.random() if "postgres" in SERVER_URL else func.rand()

    with Session(engine) as session:
        for value in (
            session.query(ProductCategory.category)
            .distinct()
            .order_by(random_function)
            .limit(count)
        ):
            categories.append(value[0])

    return categories
