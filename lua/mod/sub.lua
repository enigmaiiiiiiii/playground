
local path = '/Users/dopamine/Code/MyRepository/playground/lua.pack/mod'

local pattern = '([^/]+/[^/]+)$'

local first, second, res = string.find(path, pattern)

print(first, second, res)
