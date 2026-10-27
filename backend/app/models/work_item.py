from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import BigInteger
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy import NVARCHAR
from sqlalchemy import func

from app.database.base import Base


class WorkItem(Base):

    __tablename__ = "WorkItems"
    __table_args__ = {"schema": "servicedesk"}

    WorkItemID = Column(BigInteger, primary_key=True)

    WorkItemNumber = Column(String(50))

    ProjectID = Column(Integer)

    WorkItemTypeID = Column(Integer)

    CategoryID = Column(Integer)

    StatusID = Column(Integer)

    PriorityID = Column(Integer)

    Title = Column(String(500))

    Description = Column(NVARCHAR)

    AssignedUserID = Column(Integer)

    CreatedByUserID = Column(Integer)

    ParentWorkItemID = Column(BigInteger)

    CreatedDate = Column(
        DateTime,
        server_default=func.sysutcdatetime()
    )