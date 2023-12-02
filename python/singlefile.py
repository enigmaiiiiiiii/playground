from pydantic import BaseModel, PydanticUserError

class Foo(BaseModel):
    x: "Bar"

try:
    Foo.model_json_schema()
except PydanticUserError as e:
    print(e)

class Bar(BaseModel):
    pass

