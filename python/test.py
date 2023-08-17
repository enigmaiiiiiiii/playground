from collections.abc import Iterable
from typing import Protocol


class Combiner(Protocol):
    def __call__(self, *vals: bytes, maxlen: int | None = None) -> list[bytes]:
        ...


def batch_proc(data: Iterable[bytes], cb_results: Combiner) -> bytes:
    for item in data:
        ...


def good_cb(*vals: bytes, maxlen: int | None = None) -> list[bytes]:
   ... 


def bad_cb(*vals: bytes, maxitems: int | None) -> list[bytes]:
    ...


batch_proc([], good_cb)
batch_proc([], bad_cb)
