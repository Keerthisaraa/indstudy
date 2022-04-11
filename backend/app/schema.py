import datetime

from sqlmodel import Field, SQLModel


class Product(SQLModel, table=True):
    __tablename__ = "products"
    id: str = Field(primary_key=True)
    product_name: str
    selling_price: float
    about_product: str
    product_specification: str
    image: str


class ProductCategory(SQLModel, table=True):
    __tablename__ = "product_categories"
    product_id: str = Field(primary_key=True)
    category: str


class User(SQLModel, table=True):
    __tablename__ = "users"
    id: str = Field(primary_key=True)
    email: str
    name: str
    password: str


class Order(SQLModel, table=True):
    __tablename__ = "orders"
    order_id: str = Field(primary_key=True)
    user_id: str
    order_date: datetime.datetime
    order_status: str


class OrderDetail(SQLModel, table=True):
    __tablename__ = "order_details"
    order_id: str = Field(primary_key=True)
    product_id: str = Field(primary_key=True)
    quantity: int
