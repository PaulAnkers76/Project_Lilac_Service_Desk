from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean

from app.database.base import Base


class Users(Base):

    __tablename__ = "Users"
    __table_args__ = {"schema": "servicedesk"}

    UserID = Column(Integer, primary_key=True)

    DisplayName = Column(String)

    UserRole = Column(String)

    IsActive = Column(Boolean)