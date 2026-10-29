from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.base import Base


class WorkItemType(Base):

    __tablename__ = "WorkItemTypes"
    __table_args__ = {"schema": "servicedesk"}

    WorkItemTypeID = Column(Integer, primary_key=True)

    WorkItemTypeName = Column(String)