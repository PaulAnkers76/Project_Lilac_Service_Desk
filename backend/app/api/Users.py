from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.Users import Users

router = APIRouter()

@router.get("/Users")
def get_users(
    db: Session = Depends(get_db)
):
    return db.query(Users).all()