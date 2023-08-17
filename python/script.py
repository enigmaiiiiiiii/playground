from Collection import List 
print("hello world")

# heap sort
def heap_sort(l: List[int]):
    
    def heapify(l: List, n: int, i: int):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and l[i] < l[left]:
            largest = left
        if right < n and l[largest] < l[right]:
            largest = right
        if largest != i:
            l[i], l[largest] = l[largest], l[i]
            heapify(l, n, largest)

    n = len(l)
    for i in range(n // 2 - 1, -1, -1):
        heapify(l, n, i)
    for i in range(n - 1, 0, -1):
        l[i], l[0] = l[0], l[i]
        heapify(l, i, 0)

