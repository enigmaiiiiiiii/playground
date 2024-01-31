class MyIterable:
    def __init__(self, data):
        self.data = data

    def __iter__(self):
        # Return an iterator object (in this case, 'self' is used as the iterator)
        yield 1
        yield 2
        yield 3

    def __next__(self): 
        if not self.data:
            raise StopIteration
        return self.data.pop(0)

# Create an instance of MyIterable
my_iterable = MyIterable([3, 4, 5, 6,7])

# Use it in a for loop
for item in my_iterable:
    print(item)

