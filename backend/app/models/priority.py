from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.base import Base


class Priority(Base):

    __tablename__ = "Priorities"
    __table_args__ = {"schema": "servicedesk"}

    PriorityID = Column(Integer, primary_key=True)

    PriorityName = Column(String)

    DisplayOrder = Column(Integer)