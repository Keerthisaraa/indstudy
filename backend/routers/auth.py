from datetime import datetime, timedelta
from typing import Dict, Optional

from fastapi import Depends
from fastapi.routing import APIRouter
from fastapi.security import OAuth2PasswordRequestForm
from jose import jwt
from sqlmodel import Session, create_engine, select

from cfg_loader import SECRET_KEY, SERVER_URL
from schema import User

router = APIRouter()


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm="HS256")


def check_password(username: str, password: str) -> Dict:
    engine = create_engine(SERVER_URL)
    stmt = select(User).where(User.email == username)

    session = Session(engine)
    user = session.scalars(stmt).one()
    return {"email_id": user.email, "full_name": user.name}


@router.post("/login", tags=["auth"])
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = check_password(form_data.username, form_data.password)

    access_token_expires = timedelta(minutes=60)
    access_token = create_access_token(
        data={"sub": form_data.username}, expires_delta=access_token_expires
    )

    return {
        "token": access_token,
        "user": user,
    }
