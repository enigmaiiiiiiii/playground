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

    def __init__(
        self, 
        title = None, 
        content = None,
        created_at=datetime.fromtimestamp(0),
        updated_at=datetime.fromtimestamp(0)
    ):
        """
        Initializes a new Note object.

        Args:
        - title (str): The title of the note.
        - content (str): The content of the note.
        """

        self.title = title
        self.content = content
        self.created_at = created_at
        self.updated_at = updated_at

    @property
    def title(self):
        """
        Returns the title of the note.
        """

        return self.__title

    @title.setter
    def title(self, title: str):
        self.__title = title

    @property
    def content(self):
        """
        Returns the content of the note.
        """

        return self.__content

    @content.setter
    def content(self, new_content: str):
        self.__content = new_content

    @property
    def created_at(self):
        """
        Returns the date and time when the note was created.
        """

        return self.__created_at

    @created_at.setter
    def created_at(self, timestamp: str):
        self.__created_at = timestamp

    @property
    def update_at(self):
        """
        Updates the content of the note and updates the 'updated_at' timestamp.

        Args:
        - new_content (str): The new content of the note.
        """
        return self.__updated_at

    @update_at.setter
    def update_at(self, timestamp):
        self.__updated_at = timestamp

    def toJson(self):
        """
        Returns a JSON representation of the note.
        """

        return {
            "title": self.title,
            "content": self.content,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }

