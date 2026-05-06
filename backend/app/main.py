from app.database import Base, engine, get_db, OrdersORM
from app.schemas import OrderCreateShema, OrderSchema
from app.config import get_settings

from sqlalchemy.ext.asyncio import AsyncSession
from contextlib import asynccontextmanager

from fastapi import FastAPI, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4

@asynccontextmanager
async def lifespan(_: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield

settings = get_settings()

app = FastAPI(lifespan=lifespan)

app.add_midleware(
    CORSMiddleware,
    allow_origins = settings.cors_allow_origins,
    allow_methods=["*"]
)


@app.get("/test")
def test():
    return {"message": "all works correctly"}

@app.post("/create_order", status_code=status.HTTP_201_CREATED)
async def create_order(payload: OrderCreateShema, db: AsyncSession=Depends(get_db)) -> OrderSchema:
    new_order = OrdersORM(name = payload.name, phone=payload.phone, message=payload.message)
    db.add(new_order)
    await db.commit()
    await db.refresh(new_order)
    return new_order