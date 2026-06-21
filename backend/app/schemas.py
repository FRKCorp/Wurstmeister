from pydantic import BaseModel

class OrderCreateShema(BaseModel):
    name: str
    phone: str
    message: str

class OrderSchema(BaseModel):
    id: str
    name: str
    phone: str
    message: str

