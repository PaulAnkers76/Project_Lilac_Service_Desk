from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.workitem_type import WorkItemType

router = APIRouter()


@router.get("/workitemtypes")
def get_workitemtypes(
    db: Session = Depends(get_db)
):
    return db.query(WorkItemType).all()