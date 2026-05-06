from dataclasses import dataclass

@dataclass(frozen=True)
class Settings:
    DATABASE_URL: str
    cors_allow_origins:list[str]

def get_settings() -> Settings:
    return Settings(
        DATABASE_URL="postgresql+asyncpg://wurstmeister_admin:supersecretpassword@db:5432/wurstmeister_db",
        cors_allow_origins = ["http:/localhost:3000"],
    )