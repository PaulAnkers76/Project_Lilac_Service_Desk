from pydantic import BaseModel
from datetime import datetime

class CreateCommentRequest(BaseModel):

    CommentText: str
    IsInternal : bool = False
    CreatedByUserID: int


class CommentResponse(BaseModel):

    CommentID: int

    WorkItemID: int

    CommentText: str

    IsInternal: bool

    CreatedByUserID: int

    CreatedDate: datetime

    class Config:
        from_attributes = True   