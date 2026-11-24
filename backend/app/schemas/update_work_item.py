# app/schemas/update_work_item.py

from pydantic import BaseModel


class UpdateWorkItemRequest(BaseModel):

    StatusID: int
    AssignedUserID: int