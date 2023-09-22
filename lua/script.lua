local s = "hello world from Lua"

for w in string.gmatch(s, "%a+") do
  print(w)
end

local date = "Today is 17/7/1990"
local d = string.match(date, "%d+/%d+/%d+")
print(d)
