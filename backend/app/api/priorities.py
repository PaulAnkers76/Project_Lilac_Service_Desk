from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.priority import Priority

router = APIRouter()


@router.get("/priorities")
def get_priorities(
    db: Session = Depends(get_db)
):
    return db.query(Priority).all()