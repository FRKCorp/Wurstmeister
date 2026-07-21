import os
from dataclasses import dataclass

@dataclass(frozen=True)
class Settings:
    DATABASE_URL: str
    cors_allow_origins: list[str]

def get_settings() -> Settings:
    postgres_user = os.getenv("POSTGRES_USER")
    postgres_password = os.getenv("POSTGRES_PASSWORD")
    postgres_db = os.getenv("POSTGRES_DB")

    return Settings(
        DATABASE_URL=f"postgresql+asyncpg://{postgres_user}:{postgres_password}@db:5432/{postgres_db}",
        cors_allow_origins=["http://localhost:3000"],
    )