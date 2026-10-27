# app/models/project_sequence.py

from sqlalchemy import Column
from sqlalchemy import Integer

from app.database.base import Base


class ProjectSequence(Base):

    __tablename__ = "ProjectSequences"
    __table_args__ = {"schema": "servicedesk"}

    ProjectID = Column(Integer, primary_key=True)

    NextNumber = Column(Integer)