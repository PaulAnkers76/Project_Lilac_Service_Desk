from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import DateTime
from sqlalchemy import BigInteger
from sqlalchemy import NVARCHAR
from sqlalchemy import func

from app.database.base import Base  

class WorkItemComment(Base):

    __tablename__ = "WorkItemComments"
    __table_args__ = {"schema":"servicedesk"}

    CommentID = Column(BigInteger, primary_key=True)
    WorkItemID = Column(BigInteger)
    CommentText = Column(NVARCHAR)
    IsInternal = Column(Boolean)
    CreatedByUserID = Column(Integer)
    CreatedDate = Column(DateTime,
                         server_default=func.sysutcdatetime())

    