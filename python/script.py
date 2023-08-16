from datetime import datetime

class Note:
    """
    This class represents a note.

    Attributes:
    - title (str): The title of the note.
    - content (str): The content of the note.
    - created_at (datetime): The date and time when the note was created.
    - updated_at (datetime): The date and time when the note was last updated.

    Methods:
    - update_content(new_content): Updates the content of the note and updates the 'updated_at' timestamp.
    """

    __title: str
    __content: str
    __created_at: datetime
    __updated_at: datetime

    def __init__(self, title, content):
        """
        Initializes a new Note object.

        Args:
        - title (str): The title of the note.
        - content (str): The content of the note.
        """

        self.title = title
        self.content = content

    @property

    @property
    def created_at(self):
        """
        Returns the date and time when the note was created.
        """

        return self.__created_at

    @property
    def update_at(self):
        """
        Updates the content of the note and updates the 'updated_at' timestamp.

        Args:
        - new_content (str): The new content of the note.
        """
        return self.__updated_at

    @update_at.setter
    def update_at(self):
        self.__updated_at = datetime.now()


note  = Note("")
