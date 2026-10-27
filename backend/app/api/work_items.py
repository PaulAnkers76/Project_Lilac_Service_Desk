from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.work_item import WorkItem

router = APIRouter()


@router.get("/workitems")
def get_workitems(
    db: Session = Depends(get_db)
):
    
    return db.query(WorkItem).all()

from app.schemas.work_item import CreateWorkItemRequest

from app.models.project import Project
from app.models.work_item import WorkItem

from app.services.workitem_service import (
    get_next_workitem_number
)

@router.post("/workitems")
def create_workitem(
    request: CreateWorkItemRequest,
    db: Session = Depends(get_db)
):
    print("1. Endpoint reached")

    project = (
        db.query(Project)
        .filter(
            Project.ProjectID == request.ProjectID
        )
        .first()
    )

    print("2. Project loaded")

    workitem_number = get_next_workitem_number(
        db,
        project.ProjectCode,
        project.ProjectID
    )

    print("3. Number generated:", workitem_number)

    workitem = WorkItem()

    print("4. WorkItem created")

    workitem.WorkItemNumber = workitem_number
    workitem.ProjectID = request.ProjectID
    workitem.WorkItemTypeID = request.WorkItemTypeID
    workitem.StatusID = request.StatusID
    workitem.PriorityID = request.PriorityID
    workitem.Title = request.Title
    workitem.Description = request.Description
    workitem.CreatedByUserID = request.CreatedByUserID

    print("5. Fields assigned")

    db.add(workitem)

    print("6. Added to session")

    db.commit()

    print("7. Commit complete")

    db.refresh(workitem)

    print("8. Refresh complete")

    return workitem