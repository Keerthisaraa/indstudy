# from sqlalchemy import Column, DateTime, Float, Integer, String
# from sqlalchemy.ext.declarative import declarative_base

# Base = declarative_base()
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
    email: str = Field(primary_key=True)
    name: str
    password: str


class Order(SQLModel, table=True):
    __tablename__ = "orders"
    id: str = Field(primary_key=True)
    user_id: str
    total: float


class OrderProduct(SQLModel, table=True):
    __tablename__ = "order_products"
    order_id: str = Field(primary_key=True)
    product_id: str = Field(primary_key=True)
    count: int
