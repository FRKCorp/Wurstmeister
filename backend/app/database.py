from sqlalchemy.orm import sessionmaker, DeclarativeBase, Mapped, mapped_column
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession

from app.config import get_settings

from uuid import uuid4

settings = get_settings()

engine = create_async_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

class Base(DeclarativeBase):
    id: Mapped[str] = mapped_column(primary_key=True, default=lambda: str(uuid4()))

class OrdersORM(Base):
    __tablename__ = "orders"

    name: Mapped[str]
    phone: Mapped[str]
    message: Mapped[str]

async def get_db():
    async with SessionLocal() as db:
        yield db