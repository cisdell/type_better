from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserStatRequest(BaseModel):
    email: EmailStr
    login_time: datetime
    time_spent: int
    clear_count: int

class UserStatResponse(BaseModel):
    email: str
    max_cleared: int
    time_occured: datetime

class LeaderboardResponse(BaseModel):
    email: str
    clear_count: int
    login_time: datetime


