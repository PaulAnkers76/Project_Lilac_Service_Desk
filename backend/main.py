from fastapi import FastAPI

from app.api.work_items import router

app = FastAPI(
    title="Service Desk API"
)

app.include_router(router)