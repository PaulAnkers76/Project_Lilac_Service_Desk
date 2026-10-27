from pydantic import BaseModel


class WorkItemResponse(BaseModel):

    WorkItemID: int

    WorkItemNumber: str

    Title: str

    class Config:
        from_attributes = True

class CreateWorkItemRequest(BaseModel):

    ProjectID: int
    WorkItemTypeID: int
    StatusID: int
    PriorityID: int
    Title: str
    Description: str
    CreatedByUserID: int