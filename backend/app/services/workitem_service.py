from app.models.project_sequence import ProjectSequence


def get_next_workitem_number(db, project_code, project_id):

    sequence = (
        db.query(ProjectSequence)
        .filter(
            ProjectSequence.ProjectID == project_id
        )
        .first()
    )

    next_number = sequence.NextNumber

    sequence.NextNumber += 1

    db.commit()

    return f"{project_code}-{next_number:06d}"
