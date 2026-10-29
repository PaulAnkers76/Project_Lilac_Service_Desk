from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean

from app.database.base import Base


class Status(Base):

    __tablename__ = "Statuses"
    __table_args__ = {"schema": "servicedesk"}

    StatusID = Column(Integer, primary_key=True)

    StatusName = Column(String)

    IsClosedStatus = Column(Boolean)