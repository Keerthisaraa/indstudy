from sqlmodel import Session, SQLModel, create_engine

from cfg_loader import SERVER_URL

engine = create_engine(SERVER_URL)


def get_session():
    with Session(engine) as session:
        yield session
