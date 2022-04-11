import datetime
import uuid
from typing import List, Tuple

from fastapi import APIRouter
from sqlmodel import Session, select

from db import engine
from schema import Order, OrderDetail, Product

router = APIRouter()


@router.get("/orders", tags=["orders"])
def get(user_id: str):
    order_details = []
    with Session(engine) as session:
        stmt = (
            select(
                Order.order_id,
                Order.order_date,
                Order.order_status,
                Product.product_name,
                Product.image,
            )
            .filter(Order.user_id == user_id)
            .join(OrderDetail, Order.order_id == OrderDetail.order_id)
            .join(Product, OrderDetail.product_id == Product.id)
            .order_by(Order.order_date.desc())
        )
        for row in session.execute(stmt):
            order_details.append(row)

    return order_details


@router.put("/orders", tags=["orders"])
def put(user_id: str, order_date: str, product_ids: List[Tuple[str, int]]):
    order_id = str(uuid.uuid4())
    order_date = datetime.datetime.strptime(order_date, "%Y-%m-%d %H:%M:%S")
    with Session(engine) as session:
        new_order = Order(
            user_id=user_id,
            order_id=order_id,
            order_date=order_date,
            order_status="Placed",
        )
        session.add(new_order)

        products = []
        for product_id in product_ids:
            products.append(
                OrderDetail(
                    order_id=order_id, product_id=product_id[0], quantity=product_id[1]
                )
            )

        session.add_all(products)
        session.commit()
