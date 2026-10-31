from fastapi import FastAPI
from app.api.projects import router as projects_router
from app.api.work_items import router
from app.api.statuses import router as statuses_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Service Desk API"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)
app.include_router(projects_router)
app.include_router(statuses_router)