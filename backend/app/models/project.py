from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.base import Base


class Project(Base):

    __tablename__ = "Projects"
    __table_args__ = {"schema": "servicedesk"}

    ProjectID = Column(Integer, primary_key=True)

    ProjectCode = Column(String)

    ProjectName = Column(String)