
local path = '/Users/dopamine/Code/MyRepository/playground/lua/mod'

local pattern = '^.*(%w+/%w+$)'

local pack = string.match(path, pattern)

print(pack)
