# app/api/projects.py

from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.project import Project

router = APIRouter()


@router.get("/projects")
def get_projects(
    db: Session = Depends(get_db)
):
    return db.query(Project).all()