
def foo(**kwargs):
    print(kwargs)


a = [1, 2, 3]
b = [4, 5]
c = 5 if len(b) > len(a) else 0

print(c)

