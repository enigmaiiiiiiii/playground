from datetime import datetime
from pydantic import BaseModel

class Note(BaseModel):
    """
    This class represents a note.

    Attributes:
    - title (str): The title of the note.
    - content (str): The content of the note.
    - created_at (datetime): The date and time when the note was created.
    - updated_at (datetime): The date and time when the note was last updated.
    """

    title: str
    content: str
    created_at: datetime
    updated_at: datetime


