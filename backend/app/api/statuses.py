from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.status import Status

router = APIRouter()

@router.get("/statuses")
def get_statuses(
    db: Session = Depends(get_db)
):
    return db.query(Status).all()